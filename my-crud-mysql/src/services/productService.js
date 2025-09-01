const productRepository = require("../repositories/productRepository");
const { ValidationError, UniqueConstraintError } =
    require('sequelize');
class UserService {
    async createUser(productData) {
        try {
            // Validação básica
            if (!productData.name || !productData.email) {
                throw new Error("Nome e email são obrigatórios.");
            }
            // Verificar se o email já existe
            const existingProduct = await
                productRepository.findByEmail(productData.email);
            if (existingProduct) {
                throw new Error("Email já está em uso.");
            }
            return await productRepository.create(productData);
        } catch (error) {
            // Tratar erros específicos do Sequelize
            if (error instanceof ValidationError) {
                const messages = error.errors.map(err =>
                    err.message);
                throw new Error(messages.join('. '));
            }
            if (error instanceof UniqueConstraintError) {
                throw new Error("Email já está em uso.");
            }
            throw error;
        }
    }
    async getAllUsers(options = {}) {
        try {
            const { page, limit } = options;
            if (page && limit) {
                const offset = (page - 1) * limit;
                return await productRepository.findAndCountAll({
                    limit: parseInt(limit),
                    offset: parseInt(offset)
                });
            }
            return await productRepository.findAll();
        } catch (error) {
            throw new Error("Erro ao buscar usuários: " +
                error.message);
        }
    }
    async getUserById(id) {
        try {
            // Validar se o ID é um número válido
            if (!id || isNaN(id)) {
                throw new Error("ID de usuário inválido.");
            }
        } catch (error) {
            // Tratar erros específicos do Sequelize
            if (error instanceof ValidationError) {
                const messages = error.errors.map(err =>
                    err.message);
                throw new Error(messages.join('. '));
            }
            if (error instanceof UniqueConstraintError) {
                throw new Error("Email já está em uso.");
            }
            throw error;
        }
    }
    async getAllUsers(options = {}) {
        try {
            const { page, limit } = options;
            if (page && limit) {
                const offset = (page - 1) * limit;
                return await productRepository.findAndCountAll({
                    limit: parseInt(limit),
                    offset: parseInt(offset)
                });
            }
            return await productRepository.findAll();
        } catch (error) {
            throw new Error("Erro ao buscar usuários: " +
                error.message);
        }
    }
    async getUserById(id) {
        try {
            // Validar se o ID é um número válido
            if (!id || isNaN(id)) {
                throw new Error("ID de usuário inválido.");
            }
            return updatedUser;
        } catch (error) {
            // Tratar erros específicos do Sequelize
            if (error instanceof ValidationError) {
                const messages = error.errors.map(err =>
                    err.message);
                throw new Error(messages.join('. '));
            }
            if (error instanceof UniqueConstraintError) {
                throw new Error("Email já está em uso por outro usuário.");
}
            throw error;
        }
    }
    async deleteUser(id) {
        try {
            // Validar se o ID é um número válido
            if (!id || isNaN(id)) {
                throw new Error("ID de usuário inválido.");
            }
            const deleted = await
                productRepository.delete(parseInt(id));
            if (!deleted) {
                throw new Error("Usuário não encontrado para exclusão.");
}
            return { message: "Usuário deletado com sucesso." };
        } catch (error) {
            throw error;
        }
    }
    async getUsersCount() {
        try {
            return await productRepository.count();
        } catch (error) {
            throw new Error("Erro ao contar usuários: " +
                error.message);
        }
    }
    async searchUsers(searchTerm, options = {}) {
        try {
            if (!searchTerm || searchTerm.trim() === '') {
                throw new Error("Termo de busca é obrigatório.");
            }
            const { page, limit } = options;
            let searchOptions = {};
            if (page && limit) {
                searchOptions.offset = (page - 1) * limit;
                searchOptions.limit = parseInt(limit);
            }
            return await productRepository.search(searchTerm.trim(),
                searchOptions);
        } catch (error) {
            throw new Error("Erro ao buscar usuários: " +
                error.message);
        }
    }
}
module.exports = new UserService();