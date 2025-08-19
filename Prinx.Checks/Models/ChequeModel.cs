namespace Prinx.Checks.Models;

public class ChequeModel
{
    public string Fecha { get; set; } = string.Empty;
    public string PayTo { get; set; } = string.Empty;
    public string MontoNumerico { get; set; } = string.Empty;
    public string MontoEnLetras { get; set; } = string.Empty;
    public string Concepto { get; set; } = string.Empty;
}