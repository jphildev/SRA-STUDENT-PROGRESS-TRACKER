import { Router, Request, Response } from 'express';
import { Student } from '../types/student';

const router = Router();

// Mock database
const students: Student[] = [
  {
    id: "20240001",
    name: "Juan dela Cruz",
    email: "juan.delacruz@sra.edu.ph",
    course: "BS Computer Science",
    yearLevel: 3,
    status: "Active",
    enrollmentDate: "2024-06-15"
  },
  {
    id: "20240002",
    name: "Maria Santos",
    email: "maria.santos@sra.edu.ph",
    course: "BS Information Technology",
    yearLevel: 2,
    status: "Active",
    enrollmentDate: "2024-06-18"
  }
];

// Get all students
router.get('/', (req: Request, res: Response) => {
  res.json(students);
});

// Add a student
router.post('/', (req: Request, res: Response) => {
  const newStudent: Student = {
    id: `2024000${students.length + 1}`,
    ...req.body,
    enrollmentDate: new Date().toISOString().split('T')[0]
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

export default router;
