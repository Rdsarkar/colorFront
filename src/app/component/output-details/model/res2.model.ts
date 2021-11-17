import { Input1Model } from '../../input-details/model/input1.model';
import { InputsModel } from '../../input-details/model/inputs.model';
import { SubmitModel } from '../../input-details/model/submit.model';

export class Res2 {
    message: string | undefined;
    success: boolean | undefined;
    payload!: SubmitModel[];
}