import { object, string} from 'yup';

const contactSchema = object({
    firstName: string().required('Bu alan zorunludur'),
    lastName: string().required('Bu alan zorunludur'),
    email: string().email('Geçerli bir mail adresi girin').required('Bu alan zorunludur'),
    mesaj:string().min(5,'En az 5 karakter giriniz').required('Bu alan zorunludur'),
  });

  export default contactSchema;