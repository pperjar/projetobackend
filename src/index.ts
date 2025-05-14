import app from "./app";
const PORT =process.env.PORT || 3000

app.listem(PORT,()=>{
    console.log('Servidor rodando na porta{PORT}');
});