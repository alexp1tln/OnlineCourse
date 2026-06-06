import { Article, Comment, Course, EnrolledCourse, Lesson, Message, Review, User } from '../types';

export const mockInstructors: User[] = [
  {
    id: 'inst_1',
    name: 'Елена Ростова',
    email: 'elena@aura.design',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    role: 'instructor'
  },
  {
    id: 'inst_2',
    name: 'Марсель Чен',
    email: 'marcus@aura.design',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    role: 'instructor'
  },
  {
    id: 'inst_3',
    name: 'Анна Иванова',
    email: 'anna@aura.design',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    role: 'instructor'
  }
];

export const mockCurrentUser: User = {
  id: 'user_1',
  name: 'Алексей',
  email: 'alex@example.com',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  role: 'student'
};

export const availableCourses: Course[] = [
  {
    id: 'c_1',
    title: 'Моушн-дизайн и Анимация',
    description: 'Оживи свои рисунки! Научим делать крутые анимации и эффекты для видео и интерфейсов.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
    instructor: mockInstructors[0],
    price: 4900,
    duration: '12 недель',
    level: 'Профи',
    category: 'Моушн-дизайн',
    tags: ['Анимация', 'After Effects', 'Видео'],
    totalLessons: 24
  },
  {
    id: 'c_2',
    title: 'Типографика и Логотипы',
    description: 'Научись создавать дерзкие логотипы и подбирать шрифты как настоящий профи.',
    thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1000&auto=format&fit=crop',
    instructor: mockInstructors[1],
    price: 2900,
    duration: '6 недель',
    level: 'Любитель',
    category: 'Графический дизайн',
    tags: ['Логотипы', 'Шрифты', 'Креатив'],
    totalLessons: 12
  },
  {
    id: 'c_3',
    title: 'UX/UI: Проектируем приложения',
    description: 'Создай дизайн крутого мобильного приложения с нуля! Изучи Figma и основы удобных интерфейсов.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
    instructor: mockInstructors[0],
    price: 3400,
    duration: '8 недель',
    level: 'Любитель',
    category: 'UX/UI',
    tags: ['Figma', 'Приложения', 'Интерфейсы'],
    totalLessons: 18
  },
  {
    id: 'c_4',
    title: 'Твой первый веб-сайт',
    description: 'Самое начало пути! Собираем красивые сайты, учим основы дизайна карточек и банеров.',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    instructor: mockInstructors[2],
    price: 1900,
    duration: '4 недели',
    level: 'Новичок',
    category: 'Веб-дизайн',
    tags: ['Сайты', 'Блоки', 'Дизайн'],
    totalLessons: 10
  }
];

export const mockEnrolledCourses: EnrolledCourse[] = [
  {
    ...availableCourses[2],
    progress: 45,
    completedLessons: ['l_1', 'l_2', 'l_3'],
    lastAccessed: new Date().toISOString()
  }
];

export const mockLessons: Lesson[] = [
  {
    id: 'l_1',
    courseId: 'c_3',
    title: 'Введение: Что такое UX/UI?',
    duration: '14:20',
    type: 'video',
    isCompleted: true
  },
  {
    id: 'l_2',
    courseId: 'c_3',
    title: 'Знакомство с Figma: Первые шаги',
    duration: '22:15',
    type: 'video',
    isCompleted: true
  },
  {
    id: 'l_4_assignment',
    courseId: 'c_3',
    title: 'Задание: Рисуем карточку товара',
    duration: '2ч',
    type: 'assignment',
    isCompleted: false
  },
  {
    id: 'l_3',
    courseId: 'c_3',
    title: 'Цвет и эмоции в дизайне',
    duration: '18:45',
    type: 'video',
    isCompleted: false
  }
];

export const mockMessages: Message[] = [
  {
    id: 'm_1',
    senderId: 'inst_1',
    receiverId: 'user_1',
    content: 'Привет, Лёша! Твои наброски приложения выглядят супер круто! Обрати внимание на отступы между кнопками.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    read: true
  },
  {
    id: 'm_2',
    senderId: 'user_1',
    receiverId: 'inst_1',
    content: 'Спасибо, Елена! Сейчас сделаю их пошире.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    read: true
  }
];

export const mockArticles: Article[] = [
  {
    id: 'a_1',
    title: 'Как игры учат нас хорошему дизайну?',
    excerpt: 'Интерфейсы в любимых играх продуманы до мелочей. Разбираем, что можно позаимствовать из инвентаря в Minecraft или меню в Фортнайт.',
    content: 'Игры — это не только развлечение, но и пример отличного UX. \n\n## Инвентарь как вид искусства\nВспомним инвентарь из Minecraft. Он простой, понятный и использует сетку. Это отличный пример того, как нужно организовывать данные на экране.\n\n<img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1000&auto=format&fit=crop" class="w-full rounded-2xl my-8 border-4 border-border-dark" alt="VR Headset" />\n\n## Цветовое кодирование\nРедкость предметов в играх (обычный, редкий, эпический) всегда обозначена цветом. В дизайне интерфейсов мы также используем цвета, чтобы привлечь внимание или показать важность.',
    coverImage: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1000&auto=format&fit=crop',
    author: mockInstructors[0],
    publishedAt: '2026-05-12T10:00:00Z',
    readTime: '5 мин',
    category: 'Геймдизайн'
  },
  {
    id: 'a_2',
    title: 'Топ 5 фишек в Figma для быстрого дизайна',
    excerpt: 'Хоткеи и секреты, которые сделают твою работу быстрее и веселее.',
    content: 'Figma — мощнейший инструмент. Но многие используют его лишь на 10%.\n\n## Горячие клавиши — наше всё\nИспользуешь ли ты `Shift + A` для автолайаутов? Если нет, то ты теряешь кучу времени!\n\n## Компоненты\nНикогда не копируй одну и ту же кнопку 100 раз. Сделай её компонентом, и тогда изменение цвета в одном месте поменяет её везде.',
    coverImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=1000&auto=format&fit=crop',
    author: mockInstructors[1],
    publishedAt: '2026-05-20T14:30:00Z',
    readTime: '7 мин',
    category: 'UX/UI'
  }
];

export const mockComments: Comment[] = [
  {
    id: 'c_1',
    articleId: 'a_1',
    user: mockCurrentUser,
    content: 'Вау, никогда не думал об этом в таком ключе. Крутая статья!',
    timestamp: '2026-05-13T09:15:00Z'
  }
];

export const mockReviews: Review[] = [
  {
    id: 'r_1',
    user: { id: 'u_3', name: 'Дима', email: 'dima@example.com', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', role: 'student' },
    rating: 5,
    content: 'Очень крутые курсы! Сделал свой первый сайт и показал друзьям. Преподы супер!'
  },
  {
    id: 'r_2',
    user: { id: 'u_4', name: 'Маша', email: 'masha@example.com', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop', role: 'student' },
    rating: 5,
    content: 'Анимация это огонь! Мне очень понравилось делать взрывы в After Effects. 🚀'
  }
];
