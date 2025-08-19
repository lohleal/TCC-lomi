// Simula um banco de dados em memória
let products = [];
let currentId = 1;

class ProductRepository {

    create(product) {
        const newProduct = { id: currentId++, ...product };
        products.push(newProduct);
        return newProduct;
    }

    findAll() {
        return products;
    }

    findById(id) {
        return products.find(product => product.id === id);
    }

    update(id, updatedProduct) {
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index] = {
                ...products[index],
                ...updatedProduct,
                id: id
            };
            return products[index];
        }
        return null;
    }

    delete(id) {
        const initialLength = products.length;
        products = products.filter(product => product.id !== id);
        // Retorna true se um usuário foi deletado
        return products.length < initialLength;
    }
}

module.exports = new ProductRepository();