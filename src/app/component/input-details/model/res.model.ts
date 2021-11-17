import { Input1Model } from './input1.model'
import { InputsModel } from './inputs.model';
import { SubmitModel } from './submit.model';

export class Res {
    message: string | undefined;
    success: boolean | undefined;
    payload!: Input1Model[];
}