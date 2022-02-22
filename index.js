function formatCep(value) {

    let taxCode = String(value).replace(/\D/g, "");

    if (taxCode.length < 8) {
        taxCode = "00000000";
    }

    return  taxCode.slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");
}      

module.exports = {
    formatCep
}