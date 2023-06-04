import clipBoard from "../assets/Clipboard.png";

export const EmptyTask = () => {
  return (
    <div className="container-list-empty">
      <img src={clipBoard} alt="imagem de um clipBoard" />
      <p style={{ fontWeight: "bold" }}>
        Você ainda não tem tarefas cadastradas.
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
