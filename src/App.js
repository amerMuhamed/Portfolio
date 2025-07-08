import { useRoutes } from 'react-router-dom';
import LoginPage from './LoginPage';
import UploadWorkoutPage from './UploadWorkoutPage';
import UploadExercisePage from './UploadExercisePage';
import AdminLayout from './AdminLayout';

function App() {
  const routes = useRoutes([
    { path: '/', element: <LoginPage /> },
    {
      path: '/admin',
      element: (
        <AdminLayout>
          <UploadWorkoutPage />
        </AdminLayout>
      )
    },
    {
      path: '/admin/exercise',
      element: (
        <AdminLayout>
          <UploadExercisePage />
        </AdminLayout>
      )
    }
  ]);

  return routes;
}

export default App;
