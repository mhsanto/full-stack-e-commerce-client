type Billboard = {
    id:string;
    name:string;
    imageUrl:string;
}
type Category = {
    id: string;
    name: string;
    billboard: Billboard
}