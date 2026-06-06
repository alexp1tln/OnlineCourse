export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'student' | 'instructor';
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: User;
  price: number;
  duration: string;
  level: 'Новичок' | 'Любитель' | 'Профи';
  category: string;
  tags: string[];
  totalLessons: number;
}

export interface EnrolledCourse extends Course {
  progress: number;
  completedLessons: string[];
  lastAccessed: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  duration: string;
  videoUrl?: string;
  type: 'video' | 'assignment' | 'reading';
  isCompleted: boolean;
}

export interface Assignment {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  feedback?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface PaymentIntent {
  id: string;
  courseId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  date: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: User;
  publishedAt: string;
  readTime: string;
  category: string;
}

export interface Comment {
  id: string;
  articleId: string;
  user: User;
  content: string;
  timestamp: string;
}

export interface Review {
  id: string;
  courseId?: string;
  user: User;
  rating: number;
  content: string;
}
