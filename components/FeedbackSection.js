// components/FeedbackSection.js
"use client";

export default function FeedbackSection() {
    // Mock comments for the prototype
    const comments = [
        { author: 'Ahmad Ali', text: 'This was a very clear explanation, thank you!' },
        { author: 'Fatima Khan', text: 'Could you please elaborate on the concept of Ultimate Reality?' },
    ];

    return (
        <div className="mt-8 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Feedback & Questions</h3>
            {/* Existing comments */}
            <div className="space-y-4 mb-6">
                {comments.map((comment, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-semibold">{comment.author}</p>
                        <p className="text-gray-700">{comment.text}</p>
                    </div>
                ))}
            </div>
            {/* New comment form */}
            <div>
                <textarea 
                    className="w-full p-3 border rounded-lg" 
                    rows="3" 
                    placeholder="Leave your feedback or ask a question..."
                ></textarea>
                <button className="mt-2 bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700">
                    Submit
                </button>
            </div>
        </div>
    );
}