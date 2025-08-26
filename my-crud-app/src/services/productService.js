const productRepository = require("../repositories/productRepository");

class ProductService {

    createProduct(productData) {
        // Aqui poderia haver validações de negócio, como verificar se o email já existe
        if (!productData.nome || !productData.valor || !productData.tamanho || !productData.categoria) {
            throw new Error("Os dados são obrigatórios.");
        }
        if(productData.nome){

        }
        return productRepository.create(productData);
    }

    getAllProducts() {
        return productRepository.findAll();
    }

    getProductById(id) {
        const product = productRepository.findById(parseInt(id));
        if (!product) {
            throw new Error("Produto não encontrado.");
        }
        return product;
    }
    updateProduct(id, productData) {
        if (!productData.nome && !productData.valor && !productData.tamanho && !productData.categoria ) {
            throw new Error("Pelo menos um campo deve ser fornecido para atualização.");
        }
        const updatedProduct = productRepository.update(parseInt(id), productData);
        if (!updatedProduct) {
            throw new Error("Produto não encontrado para atualização.");
        }
        return updatedProduct;
    }
    deleteProduct(id) {
        const deleted = productRepository.delete(parseInt(id));
        if (!deleted) {
            throw new Error("Produto não encontrado para exclusão.");
        }
        return { message: "Produto deletado com sucesso." };
    }
        
}

module.exports = new ProductService();
