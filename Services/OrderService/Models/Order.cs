namespace OrderService
{
    public record Order
    {
        public int Id { get; set; }
        public string Customer { get; init; }
        public string Product { get; init; }
        public int Quantity { get; init; }
    }
}
