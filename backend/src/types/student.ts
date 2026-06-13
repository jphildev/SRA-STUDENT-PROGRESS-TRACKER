export interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  yearLevel: number;
  status: 'Active' | 'Inactive' | 'On Leave';
  enrollmentDate: string;
}
