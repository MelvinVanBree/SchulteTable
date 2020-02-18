import * as PIXI from 'pixi.js';
import { Config } from 'Game/config';
import { Button, Grid } from "Game/components";

export class core {
    private renderer: PIXI.Application;
    private container: PIXI.Container;
    private grid: Grid;
    private vh: number;
    private vw: number;

    constructor(private viewElement: HTMLElement){
        PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH;

        this.renderer = new PIXI.Application({ width: window.innerWidth, height: innerHeight, resizeTo: viewElement , backgroundColor: Config.style.backgroundColor });
        this.container = new PIXI.Container();
        this.grid = new Grid();

        viewElement.appendChild( this.renderer.view );
        this.renderer.stage.addChild(this.container);

        this.vh = this.renderer.view.height;
        this.vw = this.renderer.view.width;
    }

    public init() {
        this.populateGrid();
        this.drawGrid();
    }

    private randomArr():number[]{
        //The amount of random numbers required (x.y)
        let n = Config.settings.gridSize.x * Config.settings.gridSize.y;


        let randomNums = Array.from({length: n}, (v, k) => k+1);

        for (let i = randomNums.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomNums[i], randomNums[j]] = [randomNums[j], randomNums[i]];
        }
        return randomNums;
    }

    private populateGrid() {
        let random = this.randomArr();
        // Classic Row(x) Column(y) loop
        for(let x=0; x < this.grid.getX(); x++){
            for(let y=0; y < this.grid.getY(); y++){
                // Add buttons to this.grid
                this.grid.addElement(
                    new Button(
                        //Get random number
                        random.pop()!,
                        // Classic 2D grid logic:
                        // X, Y, Weight, Width
                        x * (this.vw / this.grid.getX()),
                        y * this.vh / this.grid.getY(),
                        this.vh / this.grid.getY(),
                        this.vw / this.grid.getX()
                    )
                )
            }
        }


    }

    private drawGrid() {
        this.grid.get().forEach(button => {
            this.container.addChild(button.ref);
        });
    }


}