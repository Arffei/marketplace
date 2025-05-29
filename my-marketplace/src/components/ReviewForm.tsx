// src/components/ReviewForm.tsx
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { TextField, Button } from '@mui/material';

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .min(1, 'Минимальное значение рейтинга — 1')
    .max(5, 'Максимальное значение рейтинга — 5'),
  comment: Yup.string().required('Обязательно напишите отзыв'),
});

export default function ReviewForm() {
  return (
    <Formik
      initialValues={{ rating: '', comment: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {(props) => (
        <Form>
          <Field component={TextField} label="Рейтинг" name="rating" type="number" fullWidth margin="normal" />
          <Field component={TextField} label="Ваш отзыв" name="comment" multiline rows={4} fullWidth margin="normal" />
          <Button variant="contained" color="primary" type="submit">
            Отправить отзыв
          </Button>
        </Form>
      )}
    </Formik>
  );
}