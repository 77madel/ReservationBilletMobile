export class Dateoperation{
    static formatTodayDate(): string{
        // Obtenir la date actuelle
        const today = new Date();
    
        // Formater la date en YYYY-MM-DD pour l'affichage dans un input de type date
        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2); // Mois formaté sur 2 chiffres
        const day = ('0' + today.getDate()).slice(-2); // Jour formaté sur 2 chiffres
    
        return `${year}-${month}-${day}`;
      }
}