/*jshint esversion: 6 */

export default class MossbergItemSheet extends ItemSheet {
    get template(){
        return 'systems/Mossberg/templates/sheets/${this.item.data.type}-sheet.html';
    }

    getData(){
        const data = super.getData();

        data.config = CONFIG.Mossberg;

        return data;
    }
}