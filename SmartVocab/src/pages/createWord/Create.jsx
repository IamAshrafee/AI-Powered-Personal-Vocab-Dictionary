import React, { useState } from "react";

const Create = () => {
  const [formData, setFormData] = useState({
    word: "",
    uses: "",
    meaning: "",
    exampleSentence: "",
    partOfSpeech: "",
    synonyms: "",
    antonyms: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create New Word
        </h1>
        <p className="text-gray-600 mb-8">
          Add a new word to your vocabulary collection
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Word Input */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Word *
              </label>
              <input
                type="text"
                name="word"
                value={formData.word}
                onChange={handleChange}
                placeholder="Enter the word"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                required
              />
            </div>

            {/* Part of Speech */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Part of Speech
              </label>
              <select
                name="partOfSpeech"
                value={formData.partOfSpeech}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="noun">Noun</option>
                <option value="verb">Verb</option>
                <option value="adjective">Adjective</option>
                <option value="adverb">Adverb</option>
                <option value="preposition">Preposition</option>
                <option value="conjunction">Conjunction</option>
                <option value="interjection">Interjection</option>
                <option value="pronoun">Pronoun</option>
              </select>
            </div>

            {/* Word Category */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Word Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="general">General</option>
                <option value="academic">Academic</option>
                <option value="business">Business</option>
                <option value="technical">Technical</option>
                <option value="literary">Literary</option>
                <option value="slang">Slang</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Empty div for grid spacing */}

            {/* Meaning */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Simple Meaning
              </label>
              <textarea
                name="meaning"
                value={formData.meaning}
                onChange={handleChange}
                placeholder="Brief meaning in simple words"
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              ></textarea>
            </div>

            {/* Uses */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Uses & Context
              </label>
              <textarea
                name="uses"
                value={formData.uses}
                onChange={handleChange}
                placeholder="How and when to use this word"
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              ></textarea>
            </div>

            {/* Example Sentence */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Example Sentence
              </label>
              <textarea
                name="exampleSentence"
                value={formData.exampleSentence}
                onChange={handleChange}
                placeholder="Example of usage in a sentence"
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              ></textarea>
            </div>

            {/* Synonyms */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Synonyms
              </label>
              <input
                type="text"
                name="synonyms"
                value={formData.synonyms}
                onChange={handleChange}
                placeholder="Similar words (comma separated)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              />
            </div>

            {/* Antonyms */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Antonyms
              </label>
              <input
                type="text"
                name="antonyms"
                value={formData.antonyms}
                onChange={handleChange}
                placeholder="Opposite words (comma separated)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Additional Notes
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Memory tricks, extra information, or personal notes"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all"
            >
              Save Word
            </button>
          </div>
        </form>

        {/* Tips Section */}
        <div className="mt-12 bg-gray-100 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            💡 Pro Tips
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Be consistent with your definitions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Add personal examples to remember better</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Use mnemonics for difficult words</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Review words regularly for better retention</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Create;
