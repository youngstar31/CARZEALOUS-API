import { Engine } from './engine';
import { Transmission } from './transmission';

export class Car {
    id: number;
    price: number;
    year: number;
    make: string;
    model: string;
    engine: Engine;
    transmission: Transmission;
    zeroToSixty: number;
    overview: string;
    
}