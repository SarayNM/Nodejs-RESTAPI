import { appendFileSync } from 'fs';


class Artistdata {
    constructor(name = '', mbid='', url='', image_small='', image='') {
      this.name = name;
      this.mbid = mbid;
      this.url = url;
      this.image_small = image_small;
      this.image = image;
      
    }
    
    saveAsCSV() {
        const csv = `${this.name},${this.mbid},${this.url} ,${this.image_small},${this.image}\n`;
        try {
          appendFileSync('./contacts.csv', csv);
        } catch (err) {
          console.error(err);
        }
      }
    }
  
    const startApp = () => {
        const contact1 = new Artistdata("robbin", "643264", "reubfsi345","efraewtr","ewtgre");
        contact1.saveAsCSV();
    
        const contact2 = new Artistdata("name:mary", "url:3465436", "ferte431d","235325","325346ertg");
        contact2.saveAsCSV();
    }
      startApp();
  