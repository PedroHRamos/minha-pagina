import { SysDTO } from './SysDTO';
import { CloudsDTO } from './CloudsDTO';
import { WindDTO } from './WindDTO';
import { MainDTO } from './MainDTO';
import { WeatherDTO } from './WeatherDTO';
import { CoordDTO } from './CoordDTO';
export class JsonDTO {
    coord: CoordDTO;
    weather: WeatherDTO;
    base: string;
    main: MainDTO;
    visibility: number;
    wind: WindDTO;
    clouds: CloudsDTO;
    dt: number;
    sys: SysDTO;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}