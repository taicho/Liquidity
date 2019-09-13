import { getId } from '../utilities';

export class EngineParticle {
    public id = getId();
    public individualGravity = 0;
    public stiffness = 0;
    public x = 0;
    public y = 0;
    public u = 0;
    public v = 0;
    public gU = 0;
    public gV = 0;
    public force0 = 0;
    public force1 = 0;
    public force2 = 0;
    public cX = 0;
    public cY = 0;
    public pX: [number, number, number] = [0, 0, 0];
    public pY: [number, number, number] = [0, 0, 0];
    public gX: [number, number, number] = [0, 0, 0];
    public gY: [number, number, number] = [0, 0, 0];
    public dead = false;
    public broken = false;
    public decaying = false;
    public life = 1.0;
    public decayRate = 0.05;

    constructor(x: number, y: number, u: number, v: number) {
        this.x = x;
        this.y = y;
        this.u = u;
        this.v = v;
    }

    public revive() {
        this.life = 1.0;
        this.dead = false;
    }
}
