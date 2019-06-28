export default class ProjectEntity {
  picture: string;
  title: string;
  description: string;
  link: string;
  isLeft: boolean;

  constructor(e: any) {
    this.picture = e.picture;
    this.title = e.title;
    this.description = e.description;
    this.link = e.link;
    this.isLeft = e.isLeft;
  }
}
