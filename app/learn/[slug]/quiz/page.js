// app/learn/[slug]/quiz/page.js
import Link from 'next/link';
import QuizComponent from '../../../../components/QuizComponent';

// Mock quiz data
const quizData = {
  materialism: {
    title: 'Materialism Quiz',
    questions: [
      {
        question: "According to Materialism, what is the 'Ultimate Reality'?",
        options: ['Consciousness', 'Matter', 'Energy', 'Information'],
        correctAnswer: 'Matter',
      },
      {
        question: 'Which concept is a direct result of economic materialism in modern society?',
        options: ['Spirituality', 'Consumerism', 'Charity', 'Minimalism'],
        correctAnswer: 'Consumerism',
      },
      {
        question: 'What does Surah At-Takathur warn against?',
        options: ['The pursuit of knowledge', 'The pursuit of worldly riches', 'Helping the poor', 'Praying at night'],
        correctAnswer: 'The pursuit of worldly riches',
      },
    ],
  },
};

export default function QuizPage({ params }) {
  const { slug } = params;
  const quiz = quizData[slug];

  if (!quiz) {
    return <div className="p-12 text-center">Quiz not found for this course.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-gray-50">
      <nav className="w-full max-w-4xl p-4 mb-8">
        <Link href={`/learn/${slug}`} className="text-blue-600 hover:underline">&larr; Back to Lessons</Link>
      </nav>

      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">{quiz.title}</h1>
        <p className="mt-3 text-lg text-gray-600">Test your knowledge to complete the course.</p>
      </header>

      <section className="w-full max-w-4xl">
        <QuizComponent questions={quiz.questions} />
      </section>
    </main>
  );
}