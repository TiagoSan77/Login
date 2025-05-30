import ClientesScheme from "../models/ClientesScheme";

class ClientesController{
    public async create(req: any, res: any): Promise<void> {
        try {
            const { nome, contato, plano,vencimento, status  } = req.body;
            const newCliente = new ClientesScheme({ nome, contato, plano,vencimento, status});
             await newCliente.save();
            res.status(201).json({ message: 'Cliente criado com sucesso', cliente: { nome, contato, plano,vencimento, status  } });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao criar cliente', error });
        }
    }
    public async read(req: any, res: any): Promise<void> {
        try {
            const clientes = await ClientesScheme.find();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao obter clientes', error });
        }
    }
}

const cliente = new ClientesController();
export default cliente;