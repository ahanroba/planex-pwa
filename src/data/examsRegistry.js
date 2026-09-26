// src/data/examsRegistry.js
import questions1405Khordad from './questions-1405-khordad.json';
import questions1404Azar from './questions-1404-azar.json';
import questions1404 from './questions-1404.json';
import questions1403Azar from './questions-1403-azar.json';
import questions1403Esfand from './questions-1403-esfand.json';
import questions1403Shahrivar from './questions-1403-shahrivar.json';
import questions1403Khordad from './questions-1403-khordad.json';
import questions1402Esfand from './questions-1402-esfand.json';
import questions1402Shahrivar from './questions-1402-shahrivar.json';
import questions1402Khordad from './questions-1402-khordad.json';

export const EXAMS_REGISTRY = [
  {
    id: '1405-khordad',
    title: 'خرداد ۱۴۰۵',
    fullTitle: 'پرهانترنی میاندوره خرداد ۱۴۰۵',
    subtitle: 'سوالات آزمون میاندوره پرهانترنی خرداد ۱۴۰۵ به همراه نکات کلیدی تشریحی و رمز طلایی',
    description: 'سوالات آزمون میاندوره پرهانترنی خرداد ۱۴۰۵ به همراه نکات کلیدی تشریحی و رمز طلایی',
    year: '۱۴۰۵',
    month: 'خرداد',
    badge: 'میاندوره جدید 🔥',
    badgeColor: '#f59e0b',
    icon: '📝',
    isComplete: true,
    dataFile: './questions-1405-khordad.json',
    questions: questions1405Khordad
  },
  {
    id: '1404-azar',
    title: 'آذر ۱۴۰۴',
    fullTitle: 'میان‌دوره آذر ۱۴۰۴',
    subtitle: 'آزمون میان‌دوره پره‌انترنی کشوری (۲۰۰ تست کامل)',
    year: '۱۴۰۴',
    month: 'آذر',
    badge: 'میان‌دوره جدید ⚡',
    badgeColor: '#f43f5e',
    icon: '⚡',
    isComplete: true,
    questions: questions1404Azar
  },
  {
    id: '1404-shahrivar',
    title: 'شهریور ۱۴۰۴',
    fullTitle: 'پره‌انترنی شهریور ۱۴۰۴',
    subtitle: 'جامع قطب‌های کشوری (۲۰۰ تست کامل)',
    year: '۱۴۰۴',
    month: 'شهریور',
    badge: 'جامع کشوری',
    badgeColor: '#0ea5e9',
    icon: '🩺',
    isComplete: true,
    questions: questions1404
  },
  {
    id: '1403-esfand',
    title: 'اسفند ۱۴۰۳',
    fullTitle: 'پره‌انترنی اسفند ۱۴۰۳',
    subtitle: 'آزمون پره‌انترنی کشوری (۲۰۰ تست کامل)',
    year: '۱۴۰۳',
    month: 'اسفند',
    badge: '۲۰۰ تست کامل',
    badgeColor: '#a855f7',
    icon: '📖',
    isComplete: true,
    questions: questions1403Esfand
  },
  {
    id: '1403-azar',
    title: 'آذر ۱۴۰۳',
    fullTitle: 'میان‌دوره آذر ۱۴۰۳',
    subtitle: 'آزمون میان‌دوره پره‌انترنی کشوری (۲۰۰ تست کامل)',
    year: '۱۴۰۳',
    month: 'آذر',
    badge: '۲۰۰ تست کامل',
    badgeColor: '#ec4899',
    icon: '⚡',
    isComplete: true,
    questions: questions1403Azar
  },
  {
    id: '1403-shahrivar',
    title: 'شهریور ۱۴۰۳',
    fullTitle: 'پرهانترنی شهریور ۱۴۰۳',
    subtitle: 'سوالات آزمون جامع پرهانترنی شهریور ۱۴۰۳ به همراه نکات کلیدی و رمز طلایی',
    description: 'سوالات آزمون جامع پرهانترنی شهریور ۱۴۰۳ به همراه نکات کلیدی و رمز طلایی',
    year: '۱۴۰۳',
    month: 'شهریور',
    badge: 'آزمون جامع',
    badgeColor: '#10b981',
    icon: '🎯',
    isComplete: true,
    dataFile: './questions-1403-shahrivar.json',
    questions: questions1403Shahrivar
  },
  {
    id: '1403-khordad',
    title: 'میاندوره خرداد ۱۴۰۳',
    fullTitle: 'میان‌دوره خرداد ۱۴۰۳',
    subtitle: 'سوالات آزمون میاندوره پرهانترنی خرداد ۱۴۰۳ به همراه نکات کلیدی و رمز طلایی',
    description: 'سوالات آزمون میاندوره پرهانترنی خرداد ۱۴۰۳ به همراه نکات کلیدی و رمز طلایی',
    year: '۱۴۰۳',
    month: 'خرداد',
    badge: 'میاندوره',
    badgeColor: '#f97316',
    icon: '⚡',
    isComplete: true,
    dataFile: './questions-1403-khordad.json',
    questions: questions1403Khordad
  },
  {
    id: '1402-esfand',
    title: 'اسفند ۱۴۰۲',
    fullTitle: 'پرهانترنی اسفند ۱۴۰۲',
    subtitle: 'سوالات آزمون جامع پرهانترنی اسفند ۱۴۰۲ به همراه نکات کلیدی و رمز طلایی',
    description: 'سوالات آزمون جامع پرهانترنی اسفند ۱۴۰۲ به همراه نکات کلیدی و رمز طلایی',
    year: '۱۴۰۲',
    month: 'اسفند',
    badge: 'آزمون جامع',
    badgeColor: '#f59e0b',
    icon: '📝',
    isComplete: true,
    dataFile: './questions-1402-esfand.json',
    questions: questions1402Esfand
  },
  {
    id: '1402-shahrivar',
    title: 'شهریور ۱۴۰۲',
    fullTitle: 'پرهانترنی شهریور ۱۴۰۲',
    subtitle: 'سوالات آزمون جامع پرهانترنی شهریور ۱۴۰۲ به همراه نکات کلیدی و رمز طلایی',
    description: 'سوالات آزمون جامع پرهانترنی شهریور ۱۴۰۲ به همراه نکات کلیدی و رمز طلایی',
    year: '۱۴۰۲',
    month: 'شهریور',
    badge: 'آزمون جامع',
    badgeColor: '#06b6d4',
    icon: '🎯',
    isComplete: true,
    dataFile: './questions-1402-shahrivar.json',
    questions: questions1402Shahrivar
  },
  {
    id: '1402-khordad',
    title: 'خرداد ۱۴۰۲',
    fullTitle: 'پرهانترنی میاندوره خرداد ۱۴۰۲',
    subtitle: 'سوالات آزمون میاندوره پرهانترنی خرداد ۱۴۰۲ به همراه نکات کلیدی و رمز طلایی',
    description: 'سوالات آزمون میاندوره پرهانترنی خرداد ۱۴۰۲ به همراه نکات کلیدی و رمز طلایی',
    year: '۱۴۰۲',
    month: 'خرداد',
    badge: 'میاندوره',
    badgeColor: '#f59e0b',
    icon: '📝',
    isComplete: true,
    dataFile: './questions-1402-khordad.json',
    questions: questions1402Khordad
  }
];

export function getExamById(id) {
  if (!id) return EXAMS_REGISTRY[0];
  const found = EXAMS_REGISTRY.find(e => e.id === id || e.id.toLowerCase() === id.toLowerCase());
  return found || EXAMS_REGISTRY[0];
}

export function getDefaultExam() {
  return EXAMS_REGISTRY[0];
}

export function getExamQuestions(id) {
  const exam = getExamById(id);
  return exam ? exam.questions : EXAMS_REGISTRY[0].questions;
}
