export interface Ingredient{
  ingredient: string;
  measure: string;
}

export interface  Instruction{
  instruction: string;
  photo: string;
}

export class Receipe {
  public  title: string;
  public description: string;
  public feed_this_many: number;
  public preparation_time: number;
  public ingredients: Ingredient[];
  public instructions: Instruction[];
  public cover_photo: string;

  constructor(
      t: string,
      d: string,
      ftm: number,
      pt: number,
      ing: Ingredient[],
      instr: Instruction[],
      cover: string
  ) {
     this.title = t;
     this.description = d;
     this.feed_this_many = ftm;
     this.preparation_time = pt;
     this.ingredients = ing;
     this.instructions = instr;
     this.cover_photo = cover;
  }
}
