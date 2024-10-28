export default class ToDo {
  public complited: boolean = false;
  public createdAt: Date;
  constructor(public title: string, public content: string) {
    this.createdAt = new Date();
  }
}
