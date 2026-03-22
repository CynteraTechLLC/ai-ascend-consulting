import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const glossaryTerms = [
  { term: "Agentic AI", definition: "An autonomous AI system capable of making decisions, using tools, and taking independent actions to achieve a specific goal." },
  { term: "Application Programming Interface (API)", definition: "A set of protocols that allows different software applications to communicate with each other, such as connecting your database to a language model." },
  { term: "Artificial General Intelligence (AGI)", definition: "A hypothetical level of AI that equals or exceeds human intelligence across a broad range of cognitive tasks." },
  { term: "Artificial Intelligence (AI)", definition: "The simulation of human intelligence processes by computer systems, allowing machines to learn, reason, and self-correct." },
  { term: "Automation", definition: "The use of technology to perform tasks without human intervention, driving efficiency and scaling operations." },
  { term: "Computer Vision", definition: "A field of AI that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs." },
  { term: "Context Window", definition: "The maximum amount of text (measured in tokens) that a language model can retain and analyze at one time during a single conversation or task." },
  { term: "Copilot", definition: "An AI assistant integrated into a software environment that collaborates alongside a human user to boost productivity." },
  { term: "Deep Learning (DL)", definition: "A subset of machine learning based on artificial neural networks with multiple layers, highly effective at complex pattern recognition." },
  { term: "Embeddings", definition: "Mathematical representations (vectors) of text, images, or audio that capture their meaning, allowing AI models to understand context and relationships." },
  { term: "Few-Shot Learning", definition: "A machine learning technique where a model is trained to recognize or classify new data given only a very small number of examples." },
  { term: "Fine-Tuning", definition: "The process of taking a pre-trained foundation model and training it further on a specific dataset to make it highly specialized for a precise business task." },
  { term: "Foundation Model", definition: "A massive, general-purpose AI model trained on a vast quantity of data, serving as the adaptable basis for multiple specialized applications." },
  { term: "Generative AI", definition: "Algorithms that can be used to create new content, including audio, code, images, text, simulations, and videos based on learned patterns." },
  { term: "Hallucination", definition: "When an AI model generates false, fabricated, or entirely illogical information, presenting it as factual." },
  { term: "Inference", definition: "The phase in which a trained AI model processes new, unseen data and makes predictions, classifications, or generates responses." },
  { term: "Large Language Model (LLM)", definition: "A type of AI model trained on massive amounts of text to understand, generate, and interact using human language (e.g., GPT-4)." },
  { term: "Machine Learning (ML)", definition: "A branch of artificial intelligence focusing on using data and algorithms to imitate the way humans learn, gradually improving its accuracy." },
  { term: "Model Weights", definition: "The mathematical parameters inside an AI model that it adjusts during training to determine how it processes input into output." },
  { term: "Natural Language Processing (NLP)", definition: "The branch of AI focused on the interaction between computers and human language, allowing machines to read, understand, and derive meaning from text." },
  { term: "Neural Network", definition: "Algorithms designed to recognize patterns, loosely inspired by the structure of the human brain's interconnected web of neurons." },
  { term: "Optical Character Recognition (OCR)", definition: "Technology that identifies and extracts text from images, scanned documents, and physical pages, converting it into machine-readable data." },
  { term: "Parameters", definition: "The internal variables of a model that dictates its behavior. Models are often judged by their parameter limits (e.g., a 70B parameter model)." },
  { term: "Predictive Analytics", definition: "The use of data, statistical algorithms, and ML to identify the likelihood of future outcomes based on historical data." },
  { term: "Pre-training", definition: "The initial, resource-intensive phase of training a foundation model on vast datasets to teach it general language and reasoning capabilities." },
  { term: "Prompt Engineering", definition: "The skilled practice of designing, structuring, and refining text inputs given to AI to elicit the most accurate and high-quality responses." },
  { term: "Reinforcement Learning", definition: "A training method where a model learns to make decisions by performing actions and receiving a system of rewards or penalties." },
  { term: "Retrieval-Augmented Generation (RAG)", definition: "A method where an AI looks up information from a specific knowledge base before responding, instead of guessing. This is how an AI can accurately answer questions about your specific business, pricing, and policies. You don't need the acronym. You need to know whether the system actually knows your business." },
  { term: "Supervised Learning", definition: "Training an AI model on a well-labeled dataset where the correct answer is provided, teaching the model to map inputs to precise outputs." },
  { term: "Tokenization", definition: "The process of breaking down raw text into smaller structural units (tokens), such as words or sub-words, which the AI model can mathematically process." },
  { term: "Transformer Architecture", definition: "A breakthrough deep learning architecture introduced in 2017 that revolutionized AI by enabling models to weigh the importance of different parts of input data simultaneously." },
  { term: "Unsupervised Learning", definition: "Training a model on raw, unlabeled data, forcing it to discover hidden patterns, groupings, and structures on its own." },
  { term: "Vector Database", definition: "A specialized database designed to efficiently store, organize, and query high-dimensional data (embeddings), essential for deploying RAG systems." },
  { term: "Zero-Shot Learning", definition: "The ability of an AI model to successfully perform a task it has never explicitly been trained or shown examples for." }
];

const AIGlossary = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-primary/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-4xl font-semibold md:text-5xl lg:text-6xl text-foreground mb-6">
              The <span className="text-primary">Executive's</span> AI Glossary
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Artificial Intelligence brings a new vocabulary. We demystify the core industry terms so you can confidently navigate the technical landscape and make informed business decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Glossary Grid */}
      <section className="flex-grow py-16 md:py-24 relative">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {glossaryTerms.map((item, i) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
                className="glass-card p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 relative z-10">
                  {item.term}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                  {item.definition}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIGlossary;
