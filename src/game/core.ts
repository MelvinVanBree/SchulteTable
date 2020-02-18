import * as PIXI from 'pixi.js';
import { Config } from 'Game/config';
import { Button, Grid } from "Game/components";

export class core {
    private renderer: PIXI.Application;
    private gameGrid: PIXI.Container;
    private vh: number;
    private vw: number;

    constructor(private viewElement: HTMLElement){
        PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH;

        this.renderer = new PIXI.Application({ width: window.innerWidth, height: innerHeight, resizeTo: viewElement , backgroundColor: Config.style.backgroundColor });
        this.gameGrid = new PIXI.Container();

        viewElement.appendChild( this.renderer.view );
        this.renderer.stage.addChild(this.gameGrid);

        this.vh = this.renderer.view.height;
        this.vw = this.renderer.view.width;
        this.drawGrid();
    }

    private randomArr():number[]{
        let n = Config.settings.gridSize.x * Config.settings.gridSize.y;

        let randomNums = Array.from({length: n}, (v, k) => k+1);

        for (let i = randomNums.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomNums[i], randomNums[j]] = [randomNums[j], randomNums[i]];
        }
        return randomNums;
    }

    private drawGrid() {
        let grid = new Grid();
        let random = this.randomArr();

        for(let x=0; x < grid.getX(); x++){
            for(let y=0; y < grid.getY(); y++){
                let num = random.pop();
                grid.setElement(
                    x,
                    y,
                    new Button(
                        num!,
                        x * (this.vw / grid.getX()),
                        y * this.vh / grid.getY(),
                        this.vh / grid.getY(),
                        this.vw / grid.getX(),
                        this.gameGrid
                        )
                    );
            }
        }

        grid.logGrid();
    }
}