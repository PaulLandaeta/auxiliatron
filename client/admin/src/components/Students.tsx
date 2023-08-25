import { studentsData } from '../data/students';
import Title  from './Title';
const Students = () => {

    console.table(studentsData);
    return <>({
        studentsData.map(student => {
            return (<Title description={student.name} color="grey"/>)
        })
    })</>;
}
export default Students;