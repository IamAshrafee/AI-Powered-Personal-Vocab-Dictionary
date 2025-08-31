import React, { useState } from "react";

const Words = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample word data
  const sampleWords = [
    {
      id: 1,
      word: "Ephemeral",
      meaning: "Lasting for a very short time",
      partOfSpeech: "adjective",
      category: "literary",
      example: "Fashion trends are ephemeral by nature.",
      synonyms: ["transient", "fleeting", "brief"],
      dateAdded: "2023-10-15"
    },
    {
      id: 2,
      word: "Ubiquitous",
      meaning: "Present, appearing, or found everywhere",
      partOfSpeech: "adjective",
      category: "academic",
      example: "Smartphones have become ubiquitous in modern society.",
      synonyms: ["omnipresent", "universal", "everywhere"],
      dateAdded: "2023-09-22"
    },
    {
      id: 3,
      word: "Serendipity",
      meaning: "The occurrence of events by chance in a happy or beneficial way",
      partOfSpeech: "noun",
      category: "general",
      example: "Finding my favorite book at the flea market was pure serendipity.",
      synonyms: ["chance", "luck", "fortuity"],
      dateAdded: "2023-11-05"
    },
    {
      id: 4,
      word: "Eloquent",
      meaning: "Fluent or persuasive in speaking or writing",
      partOfSpeech: "adjective",
      category: "academic",
      example: "Her eloquent speech moved the entire audience.",
      synonyms: ["articulate", "expressive", "fluent"],
      dateAdded: "2023-08-17"
    },
    {
      id: 5,
      word: "Resilient",
      meaning: "Able to withstand or recover quickly from difficult conditions",
      partOfSpeech: "adjective",
      category: "general",
      example: "Children are often more resilient than adults give them credit for.",
      synonyms: ["tough", "durable", "strong"],
      dateAdded: "2023-07-29"
    },
    {
      id: 6,
      word: "Paradigm",
      meaning: "A typical example or pattern of something",
      partOfSpeech: "noun",
      category: "academic",
      example: "The invention of the smartphone represented a paradigm shift in communication.",
      synonyms: ["model", "pattern", "example"],
      dateAdded: "2023-10-02"
    }
  ];

  // Filter words based on selected filter and search query
  const filteredWords = sampleWords.filter(word => {
    const matchesFilter = filter === "all" || word.category === filter;
    const matchesSearch = word.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         word.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Get unique categories for filter
  const categories = [...new Set(sampleWords.map(word => word.category))];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Vocabulary</h1>
            <p className="text-gray-600">{filteredWords.length} words collected</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search words..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              />
              <svg 
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            All Words
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${filter === category ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Words Grid */}
        {filteredWords.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWords.map(word => (
              <div key={word.id} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{word.word}</h2>
                    <div className="flex items-center mt-1">
                      <span className="text-sm text-gray-600 capitalize">{word.partOfSpeech}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded capitalize">
                        {word.category}
                      </span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                  </button>
                </div>
                
                <p className="text-gray-700 mb-4">{word.meaning}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Example:</p>
                  <p className="text-gray-800 italic">"{word.example}"</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600 mb-1">Synonyms:</p>
                  <div className="flex flex-wrap gap-2">
                    {word.synonyms.map((synonym, index) => (
                      <span key={index} className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">
                        {synonym}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Added: {word.dateAdded}</span>
                  <button className="text-xs text-gray-700 hover:text-gray-900 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No words found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Words;