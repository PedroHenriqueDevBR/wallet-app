class QuickTransferModel {
    public id: number;
    public name: string;
    public imageUrl: string;

    constructor(id: number, name: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    static fromJson(json:any): QuickTransferModel {
        return new QuickTransferModel(json.id, json.name, json.imageUrl);
    }

    static fromJsonList(jsonArray: Array<any>): Array<QuickTransferModel> {
        var out:Array<QuickTransferModel> = [];
        jsonArray.forEach((json) => {
            var quickTransfer:QuickTransferModel = this.fromJson(json);
            out.push(quickTransfer);
        });
        return out;
    }

}