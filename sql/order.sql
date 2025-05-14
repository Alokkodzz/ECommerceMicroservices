CREATE TABLE Orders (
    Id SERIAL PRIMARY KEY,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL,
    OrderDate TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (ProductId) REFERENCES Products(Id)
);
