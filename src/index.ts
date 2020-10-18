import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString(); //toString함수는 값을 문자열로 반환해달라는 함수이다. 

    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}




const genesisBlock: Block = new Block(0, "20202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock]; //여기서 변수 blockchain은 배열이고 Block[]은 배열안에 있는 Block객체를 의미하고 [genesisBlock]은 Block객체의 value를 의미한다.(console참조)

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export { };



//calculateBlockHash라는 메소드는 메소드 앞에 static이 있어서 스테이틱 메소드가 될거다. 스테이틱 메소드가 무슨 뜻이냐면 메소드가 Block클래스 안에 있고 Block클래스가 실행되지 않았어도 호출할 수 있는 메소드라는 의미이다. 

//스테이틱 메소드라는 것을 사용하지 않고 그냥 클래스안에 함수를 선언시키고 그 함수를 실행하고자 한다면 상수 genesisBlock처럼 블록을 생성했을때만 사용가능하다. 그러니까 genesisBlock = new Block(0, "20202020202", "", "Hello", 123456);이런식으로 생성자 함수를 실행해야지만 된다.
//그래야만 genesisBlock.sayHello이런식으로 실행시킬 수 있다.

//그러나 스테이틱 메소드를 사용하면 위에 설명처럼 할 필요가 없다.


