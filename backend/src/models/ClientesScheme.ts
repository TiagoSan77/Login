import mongoose from "mongoose";

const ClientesSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    contato: { type: String, required: true, match: [/^\d{10,11}$/, "Telefone inválido!"] },
    plano:{ type: String, required: true, enum: [ 'brpro', 'unitv'] },
    vencimento: { type: String, required: true },
    status: { type: String, required: true, enum: ['ativo', 'inativo'] },
    
});

const Clientes = mongoose.model("Clientes", ClientesSchema, 'clientes');
export default Clientes;