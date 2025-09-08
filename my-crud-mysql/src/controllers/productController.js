const ProductService = require("../services/ProductService");

class ProductController {
    async createProduct(req, res) {
        try {
            const newProduct = await ProductService.createProduct(req.body);
            res.status(201).json({
                success: true,
                message: 'Produto criado com sucesso',
                data: newProduct
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
    async getAllProducts(req, res) {
        try {
            const { page, limit } = req.query;
            const result = await ProductService.getAllProducts({ page, limit });
            // Se foi paginado, retornar com metadados
            if (result.count !== undefined) {
                const totalPages = Math.ceil(result.count / limit);
                res.status(200).json({
                    success: true,
                    data: result.rows,
                    pagination: {
                        currentPage: parseInt(page),
                        totalPages,
                        totalItems: result.count,
                        itemsPerPage: parseInt(limit)
                    }
                });
            } else {
                res.status(200).json({
                    success: true,
                    data: result
                });
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
    async getProductById(req, res) {
        try {
            const product = await ProductService.getProductById(req.params.id);
            res.status(200).json({
                success: true,
                data: product
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }
    async updateProduct(req, res) {
        try {
            const updatedProduct = await ProductService.updateProduct(
                req.params.id,
                req.body
            );
            res.status(200).json({
                success: true,
                message: 'Produto atualizado com sucesso',
                data: updatedProduct
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
    async deleteProduct(req, res) {
        try {
            const result = await ProductService.deleteProduct(req.params.id);
            res.status(200).json({
                success: true,
                message: result.message
            });
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            });
        }
    }
    async getProductsCount(req, res) {
        try {
            const count = await ProductService.getProductsCount();
            res.status(200).json({
                success: true,
                data: { count }
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
    async searchProducts(req, res) {
        try {
            const { q: searchTerm, page, limit } = req.query;
            if (!searchTerm) {
                return res.status(400).json({
                    success: false,
                    message: 'Parâmetro de busca "q" é obrigatório'
                });
            }
            const products = await ProductService.searchProducts(searchTerm, {
                page,
                limit
            });
            res.status(200).json({
                success: true,
                data: products,
                searchTerm
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }
}
module.exports = new ProductController();