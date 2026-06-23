import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Administrador.module.css';

// URLs das APIs
const FAQ_URL = "https://api.jsonbin.io/v3/b/6a372645f5f4af5e291656f8";
const DEPOIMENTOS_URL = "https://api.jsonbin.io/v3/b/6a387c8af5f4af5e291a4b71"; 

// Cabeçalhos usados em todas as requisições — cada API tem sua própria chave
const HEADERS_FAQ = {
    'Content-Type': 'application/json',
    'X-Access-Key': '$2a$10$4g.qrkgd3TRksxUTGLBpBOCR3heKcplnU2H5UgSHRUYskgilPtnG6'
};
const HEADERS_DEP = {
    'Content-Type': 'application/json',
    'X-Access-Key': '$2a$10$2BnnQCI5DYO/pJJavOSCKeIrpvyoA3zd0C6HB5YCSJp3iSNi/n6NW'
};

function Administrador() {
    const navigate = useNavigate();

    // Controla qual aba está visível: 'faq' ou 'depoimentos'
    const [aba, setAba] = useState('faq');

    // ─── Dados das listas ───────────────────────────────────────────
    const [faqs, setFaqs] = useState([]);
    const [depoimentos, setDepoimentos] = useState([]);

    // ─── Controle de carregamento e salvamento ───────────────────────
    const [carregando, setCarregando] = useState(true); //tenho um estado "carregando", pra eu mudar eu uso o setCarregando, no código ela começará como true
    const [salvando, setSalvando] = useState(false);

    // ─── Mensagem de feedback (sucesso ou erro) ──────────────────────
    const [mensagem, setMensagem] = useState(null);
    // mensagem = { tipo: 'sucesso' | 'erro', texto: '...' }

    // ─── Controle dos modais ─────────────────────────────────────────
    const [modal, setModal] = useState(null);
    // modal pode ser: null | 'novoFaq' | 'novoDep' | 'deletarFaq' | 'deletarDep'

    // ─── Dados do novo item sendo criado ────────────────────────────
    const [novoItem, setNovoItem] = useState({});

    // ─── Índice do item que será deletado ───────────────────────────
    const [indiceParaDeletar, setIndiceParaDeletar] = useState(null);

    // ─── Controle de "item deletado com sucesso" no modal ───────────
    const [deletadoComSucesso, setDeletadoComSucesso] = useState(false);

    // Verifica se o usuário está autenticado ao entrar na página
    //monta a tela depois o useEffect dispara, executa somente uma vez ao carregar a tela e verifica se está autenticado
    useEffect(() => {
        if (sessionStorage.getItem('autenticado') !== 'true') {
            navigate('/login'); //se nao tiver autenticado ele volta pro login
            return;
        }
        carregarFaqs(); //autenticou carrega a seção de faqs e depoimentos
        carregarDepoimentos();
    }, []);

    
    // FUNÇÕES DE FAQ
    async function carregarFaqs() {
        setCarregando(true); //feedback para usuário
        const response = await fetch(FAQ_URL, { headers: HEADERS_FAQ }); //segundo atributo é um atributo de configuração, passo o header para mostrar que está sendo configurado o header
        const data = await response.json(); //se deixar só um response da erro, pois fica sendo somente uma promise
        setFaqs(data.record.faqs); //o faqs que está aqui dentro é o que vem do Json
        setCarregando(false);
    }

    // Atualiza um campo específico de um FAQ da lista
    function editarFaq(indice, campo, valor) {
        setFaqs(prev => prev.map((faq, i) =>
            i === indice ? { ...faq, [campo]: valor } : faq
        ));
    }

    // Salva as edições feitas nos FAQs existentes
    async function salvarFaqs() {
        setSalvando(true);
        setMensagem(null);
        try {
            await fetch(FAQ_URL, {
                method: 'PUT',
                headers: HEADERS_FAQ,
                body: JSON.stringify({ faqs })
            });
            setMensagem({ tipo: 'sucesso', texto: 'FAQs salvos com sucesso!' });
        } catch {
            setMensagem({ tipo: 'erro', texto: 'Erro ao salvar. Tente novamente.' });
        }
        setSalvando(false);
    }

    // Adiciona o novo FAQ e já salva na API
    async function adicionarFaq() {
        if (!novoItem.pergunta?.trim() && !novoItem.resposta?.trim()) return;
        const novaLista = [...faqs, novoItem];
        setFaqs(novaLista);
        setSalvando(true);
        setMensagem(null);
        try {
            await fetch(FAQ_URL, {
                method: 'PUT',
                headers: HEADERS_FAQ,
                body: JSON.stringify({ faqs: novaLista })
            });
            setMensagem({ tipo: 'sucesso', texto: 'FAQ adicionado com sucesso!' });
        } catch {
            setMensagem({ tipo: 'erro', texto: 'Erro ao salvar. Tente novamente.' });
        }
        setSalvando(false);
        setModal(null);
    }

    // Remove o FAQ pelo índice
    function deletarFaq() {
        setFaqs(prev => prev.filter((_, i) => i !== indiceParaDeletar));
        setDeletadoComSucesso(true);
    }
    
    // FUNÇÕES DE DEPOIMENTOS
  
    async function carregarDepoimentos() {
        if (!DEPOIMENTOS_URL) return; // API ainda não configurada
        const response = await fetch(DEPOIMENTOS_URL, { headers: HEADERS_DEP });
        const data = await response.json();
        setDepoimentos(data.record.depoimentos);
    }

    function editarDepoimento(indice, campo, valor) {
        setDepoimentos(prev => prev.map((dep, i) =>
            i === indice ? { ...dep, [campo]: valor } : dep
        ));
    }

    async function salvarDepoimentos() {
        if (!DEPOIMENTOS_URL) return;
        setSalvando(true);
        setMensagem(null);
        try {
            await fetch(DEPOIMENTOS_URL, {
                method: 'PUT',
                headers: HEADERS_DEP,
                body: JSON.stringify({ depoimentos })
            });
            setMensagem({ tipo: 'sucesso', texto: 'Depoimentos salvos com sucesso!' });
        } catch {
            setMensagem({ tipo: 'erro', texto: 'Erro ao salvar. Tente novamente.' });
        }
        setSalvando(false);
    }

    async function adicionarDepoimento() {
        if (!novoItem.nome?.trim() && !novoItem.texto?.trim()) return;
        const novaLista = [...depoimentos, novoItem];
        setDepoimentos(novaLista);
        setSalvando(true);
        setMensagem(null);
        try {
            await fetch(DEPOIMENTOS_URL, {
                method: 'PUT',
                headers: HEADERS_DEP,
                body: JSON.stringify({ depoimentos: novaLista })
            });
            setMensagem({ tipo: 'sucesso', texto: 'Depoimento adicionado com sucesso!' });
        } catch {
            setMensagem({ tipo: 'erro', texto: 'Erro ao salvar. Tente novamente.' });
        }
        setSalvando(false);
        setModal(null);
    }

    function deletarDepoimento() {
        setDepoimentos(prev => prev.filter((_, i) => i !== indiceParaDeletar));
        setDeletadoComSucesso(true);
    }

   
    // HELPERS DE MODAL

    function abrirModalNovo(tipo) {
        setNovoItem({});
        setModal(tipo); // 'novoFaq' ou 'novoDep'
    }

    function abrirModalDeletar(tipo, indice) {
        setIndiceParaDeletar(indice);
        setDeletadoComSucesso(false);
        setModal(tipo); // 'deletarFaq' ou 'deletarDep'
    }

    function fecharModal() {
        setModal(null);
        setDeletadoComSucesso(false);
    }

    function handleSair() {
        sessionStorage.removeItem('autenticado');
        navigate('/');
    }

    // ════════════════════════════════════════════
    // INTERFACE
    // ════════════════════════════════════════════
    //aqui é o que vai ser renderizado na tela 
    return (
        <main className={styles.adminSection}>
            <div className={styles.painel}>

                {/* Topo */}
                <div className={styles.topo}>
                    <h1 className={styles.titulo}>Painel Administrativo</h1>
                    <button onClick={handleSair} className={styles.botaoSair}>Sair</button>
                </div>

                {/* Abas */}
                <div className={styles.abas}>
                    <button className={`${styles.aba} ${aba === 'faq' ? styles.abaAtiva : ''}`} onClick={() => setAba('faq')}>FAQs</button>
                    <button className={`${styles.aba} ${aba === 'depoimentos' ? styles.abaAtiva : ''}`} onClick={() => setAba('depoimentos')}>Depoimentos</button>
                </div>

                {/* ── ABA FAQ ── */}
                {aba === 'faq' && (
                    <div className={styles.secao}>
                        <div className={styles.secaoTopo}>
                            <h2 className={styles.secaoTitulo}>FAQs</h2>
                            <button onClick={() => abrirModalNovo('novoFaq')} className={styles.botaoAdicionar}>+ Adicionar</button>
                        </div>

                        {carregando ? <p className={styles.carregando}>Carregando...</p> : (
                            <div className={styles.lista}>
                                {faqs.map((faq, indice) => (
                                    <div key={indice} className={styles.card}>
                                        <div className={styles.cardNumero}>{indice + 1}</div>
                                        <div className={styles.cardCampos}>
                                            <div className={styles.campo}>
                                                <label>Pergunta</label>
                                                <input type="text" value={faq.pergunta} onChange={(e) => editarFaq(indice, 'pergunta', e.target.value)} placeholder="Digite a pergunta..." />
                                            </div>
                                            <div className={styles.campo}>
                                                <label>Resposta</label>
                                                <textarea value={faq.resposta} onChange={(e) => editarFaq(indice, 'resposta', e.target.value)} placeholder="Digite a resposta..." rows={3} />
                                            </div>
                                        </div>
                                        <button onClick={() => abrirModalDeletar('deletarFaq', indice)} className={styles.botaoDeletar} title="Remover">✕</button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {mensagem && <p className={`${styles.mensagem} ${styles[mensagem.tipo]}`}>{mensagem.texto}</p>}
                        <button onClick={salvarFaqs} className={styles.botaoSalvar} disabled={salvando || carregando}>
                            {salvando ? 'Salvando...' : 'Salvar FAQs'}
                        </button>
                    </div>
                )}

                {/* ── ABA DEPOIMENTOS ── */}
                {aba === 'depoimentos' && (
                    <div className={styles.secao}>
                        <div className={styles.secaoTopo}>
                            <h2 className={styles.secaoTitulo}>Depoimentos</h2>
                            <button onClick={() => abrirModalNovo('novoDep')} className={styles.botaoAdicionar}>+ Adicionar</button>
                        </div>

                        {!DEPOIMENTOS_URL ? (
                            <p className={styles.carregando}>API de depoimentos não configurada.</p>
                        ) : (
                            <div className={styles.lista}>
                                {depoimentos.map((dep, indice) => (
                                    <div key={indice} className={styles.card}>
                                        <div className={styles.cardNumero}>{indice + 1}</div>
                                        <div className={styles.cardCampos}>
                                            <div className={styles.campo}>
                                                <label>Nome</label>
                                                <input type="text" value={dep.nome} onChange={(e) => editarDepoimento(indice, 'nome', e.target.value)} placeholder="Nome da pessoa..." />
                                            </div>
                                            <div className={styles.campo}>
                                                <label>Depoimento</label>
                                                <textarea value={dep.texto} onChange={(e) => editarDepoimento(indice, 'texto', e.target.value)} placeholder="Digite o depoimento..." rows={3} />
                                            </div>
                                        </div>
                                        <button onClick={() => abrirModalDeletar('deletarDep', indice)} className={styles.botaoDeletar} title="Remover">✕</button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {mensagem && <p className={`${styles.mensagem} ${styles[mensagem.tipo]}`}>{mensagem.texto}</p>}
                        <button onClick={salvarDepoimentos} className={styles.botaoSalvar} disabled={salvando || !DEPOIMENTOS_URL}>
                            {salvando ? 'Salvando...' : 'Salvar Depoimentos'}
                        </button>
                    </div>
                )}
            </div>

            {/* ── MODAL NOVO FAQ ── */}
            {modal === 'novoFaq' && (
                <div className={styles.modalOverlay} onClick={fecharModal}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalTopo}>
                            <h3 className={styles.modalTitulo}>Novo FAQ</h3>
                            <button onClick={fecharModal} className={styles.modalFechar}>✕</button>
                        </div>
                        <div className={styles.campo}>
                            <label>Pergunta</label>
                            <input type="text" value={novoItem.pergunta || ''} onChange={(e) => setNovoItem(prev => ({ ...prev, pergunta: e.target.value }))} placeholder="Digite a pergunta..." autoFocus />
                        </div>
                        <div className={styles.campo}>
                            <label>Resposta</label>
                            <textarea value={novoItem.resposta || ''} onChange={(e) => setNovoItem(prev => ({ ...prev, resposta: e.target.value }))} placeholder="Digite a resposta..." rows={4} />
                        </div>
                        <div className={styles.modalBotoes}>
                            <button onClick={fecharModal} className={styles.botaoCancelar}>Descartar</button>
                            <button onClick={adicionarFaq} className={styles.botaoAdicionar} disabled={salvando}>{salvando ? 'Salvando...' : 'Salvar'}</button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── MODAL NOVO DEPOIMENTO ── */}
            {modal === 'novoDep' && (
                <div className={styles.modalOverlay} onClick={fecharModal}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalTopo}>
                            <h3 className={styles.modalTitulo}>Novo Depoimento</h3>
                            <button onClick={fecharModal} className={styles.modalFechar}>✕</button>
                        </div>
                        <div className={styles.campo}>
                            <label>Nome</label>
                            <input type="text" value={novoItem.nome || ''} onChange={(e) => setNovoItem(prev => ({ ...prev, nome: e.target.value }))} placeholder="Nome da pessoa..." autoFocus />
                        </div>
                        <div className={styles.campo}>
                            <label>Depoimento</label>
                            <textarea value={novoItem.texto || ''} onChange={(e) => setNovoItem(prev => ({ ...prev, texto: e.target.value }))} placeholder="Digite o depoimento..." rows={4} />
                        </div>
                        <div className={styles.modalBotoes}>
                            <button onClick={fecharModal} className={styles.botaoCancelar}>Descartar</button>
                            <button onClick={adicionarDepoimento} className={styles.botaoAdicionar} disabled={salvando}>{salvando ? 'Salvando...' : 'Salvar'}</button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── MODAL DELETAR FAQ ── */}
            {modal === 'deletarFaq' && (
                <div className={styles.modalOverlay} onClick={fecharModal}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        {!deletadoComSucesso ? (
                            <>
                                <div className={styles.modalTopo}>
                                    <h3 className={styles.modalTitulo}>Remover FAQ</h3>
                                    <button onClick={fecharModal} className={styles.modalFechar}>✕</button>
                                </div>
                                <p className={styles.modalTexto}>Tem certeza que deseja remover esse FAQ?</p>
                                <div className={styles.modalBotoes}>
                                    <button onClick={fecharModal} className={styles.botaoCancelar}>Não</button>
                                    <button onClick={deletarFaq} className={styles.botaoDeletarConfirm}>Sim</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className={styles.modalSucesso}>FAQ removido com sucesso!</p>
                                <div className={styles.modalBotoes}>
                                    <button onClick={fecharModal} className={styles.botaoAdicionar}>Fechar</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* ── MODAL DELETAR DEPOIMENTO ── */}
            {modal === 'deletarDep' && (
                <div className={styles.modalOverlay} onClick={fecharModal}>
                    <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                        {!deletadoComSucesso ? (
                            <>
                                <div className={styles.modalTopo}>
                                    <h3 className={styles.modalTitulo}>Remover Depoimento</h3>
                                    <button onClick={fecharModal} className={styles.modalFechar}>✕</button>
                                </div>
                                <p className={styles.modalTexto}>Tem certeza que deseja remover esse depoimento?</p>
                                <div className={styles.modalBotoes}>
                                    <button onClick={fecharModal} className={styles.botaoCancelar}>Não</button>
                                    <button onClick={deletarDepoimento} className={styles.botaoDeletarConfirm}>Sim</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className={styles.modalSucesso}>Depoimento removido com sucesso!</p>
                                <div className={styles.modalBotoes}>
                                    <button onClick={fecharModal} className={styles.botaoAdicionar}>Fechar</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </main>
    );
}

export default Administrador;