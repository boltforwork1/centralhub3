import { useState, useRef, useEffect, useMemo, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Calculator,
  Scale,
  Building2,
  UserCheck,
  Clock,
  Headset,
  Hand,
  type LucideIcon,
} from 'lucide-react';

type Action = {
  label: string;
  type: 'link' | 'external';
  href: string;
};

type Reply = {
  text: string;
  actions?: Action[];
};

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actions?: Action[];
};

type QuickOption = {
  id: string;
  chip: string;
  icon: LucideIcon;
  reply: Reply;
};

const WHATSAPP_URL = 'https://wa.me/971585570778';

/* ------------------------------------------------------------------ */
/* Knowledge base                                                      */
/* ------------------------------------------------------------------ */

const costFreeZone: Reply = {
  text: 'Free Zone business setup starts from approximately AED 4,888, with 100% foreign ownership, zero corporate tax (in most zones), and a fast 3–5 day turnaround. Use our Cost Calculator for an exact quote based on your activity and visa count.',
  actions: [
    { label: 'Open Cost Calculator', type: 'link', href: '/cost-calculator' },
    { label: 'Free Zone Benefits', type: 'link', href: '/free-zone' },
  ],
};

const costMainland: Reply = {
  text: 'Mainland business setup starts from approximately AED 12,000. Since 2021, most commercial activities allow 100% foreign ownership — no local sponsor required. Get an exact figure with our Cost Calculator.',
  actions: [
    { label: 'Open Cost Calculator', type: 'link', href: '/cost-calculator' },
    { label: 'Explore Mainland Setup', type: 'link', href: '/mainland' },
  ],
};

const costGeneral: Reply = {
  text: 'Business setup in the UAE starts from AED 4,888 for Free Zone packages and AED 12,000 for Mainland. You can use our instant Cost Calculator for an accurate quote!',
  actions: [
    { label: 'Open Cost Calculator', type: 'link', href: '/cost-calculator' },
    { label: 'Talk on WhatsApp', type: 'external', href: WHATSAPP_URL },
  ],
};

const legalReply: Reply = {
  text: 'Foreign investors enjoy 100% foreign ownership in both Free Zones and Mainland (under the Commercial Companies Law), with 0% personal income tax.',
  actions: [
    { label: 'Explore Mainland Setup', type: 'link', href: '/mainland' },
    { label: 'Free Zone Benefits', type: 'link', href: '/free-zone' },
  ],
};

const compareReply: Reply = {
  text: 'Mainland lets you trade anywhere in the UAE and bid on government contracts. Free Zones offer 100% capital repatriation and zero customs duty within the zone.',
  actions: [
    { label: 'Mainland Setup', type: 'link', href: '/mainland' },
    { label: 'Free Zone Setup', type: 'link', href: '/free-zone' },
  ],
};

const sponsorReply: Reply = {
  text: 'Great news! Since the 2021 law update, foreign investors can have 100% ownership in Mainland companies for most commercial activities. No local sponsor is needed!',
  actions: [
    { label: 'Explore Mainland Setup', type: 'link', href: '/mainland' },
    { label: 'Talk on WhatsApp', type: 'external', href: WHATSAPP_URL },
  ],
};

const timelineReply: Reply = {
  text: 'Free Zone setups can take just 3–5 days! Mainland setups typically take 1–2 weeks depending on approvals and activity type.',
  actions: [
    { label: 'Free Zone Setup', type: 'link', href: '/free-zone' },
    { label: 'Mainland Setup', type: 'link', href: '/mainland' },
  ],
};

const goldenVisaReply: Reply = {
  text: 'The UAE Golden Visa grants 10-year residency! It requires a 2M AED real estate investment or specific entrepreneurial/talent criteria. We handle the full application.',
  actions: [
    { label: 'Golden Visa Details', type: 'link', href: '/services/golden-visa' },
    { label: 'Talk on WhatsApp', type: 'external', href: WHATSAPP_URL },
  ],
};

const visaReply: Reply = {
  text: 'We handle employment visas, dependent visas, visa cancellation, and the 10-year UAE Golden Visa for investors. Our team manages the entire process end-to-end.',
  actions: [
    { label: 'Golden Visa Details', type: 'link', href: '/services/golden-visa' },
    { label: 'Immigration Services', type: 'link', href: '/services/immigration' },
  ],
};

const bankReply: Reply = {
  text: 'We fast-track corporate bank account opening with leading UAE banks. The process typically takes 10–30 days depending on the owner\'s citizenship and compliance requirements.',
  actions: [{ label: 'Bank Account Service', type: 'link', href: '/services/bank-account' }],
};

const liquidationReply: Reply = {
  text: 'Company liquidation takes approximately 50–60 days. We handle the audit, visa cancellation, establishment card closure, and final license cancellation in full compliance.',
  actions: [{ label: 'Liquidation Service', type: 'link', href: '/services/liquidation' }],
};

const licenseReply: Reply = {
  text: 'We handle new trade license issuance, renewal, and activity amendments. Most applications are completed within 5–7 working days.',
  actions: [{ label: 'Trade License Service', type: 'link', href: '/services/trade-license' }],
};

const consultantReply: Reply = {
  text: 'Our consultants are available right now on WhatsApp to assist you step-by-step!',
  actions: [{ label: 'Connect via WhatsApp', type: 'external', href: WHATSAPP_URL }],
};

const fallbackReply: Reply = {
  text: "I'd love to help with that! For a tailored answer, connect with our consultants on WhatsApp — they'll guide you step-by-step.",
  actions: [{ label: 'Connect via WhatsApp', type: 'external', href: WHATSAPP_URL }],
};

const quickOptions: QuickOption[] = [
  { id: 'cost', chip: 'How much does business setup cost?', icon: Calculator, reply: costGeneral },
  { id: 'legal', chip: 'What are the legal conditions?', icon: Scale, reply: legalReply },
  { id: 'compare', chip: 'Mainland vs Free Zone?', icon: Building2, reply: compareReply },
  { id: 'sponsor', chip: 'Do I need a local sponsor?', icon: UserCheck, reply: sponsorReply },
  { id: 'time', chip: 'How long does it take?', icon: Clock, reply: timelineReply },
  { id: 'consultant', chip: 'Speak with a Business Consultant', icon: Headset, reply: consultantReply },
];

type KeywordEntry = { keywords: string[]; reply: Reply };

const keywordMap: KeywordEntry[] = [
  {
    keywords: ['how much free', 'free zone cost', 'free zone price', 'freezone cost', 'free zone price'],
    reply: costFreeZone,
  },
  {
    keywords: ['how much mainland', 'mainland cost', 'mainland price', 'mainland license'],
    reply: costMainland,
  },
  {
    keywords: ['cost of visa', 'visa cost', 'visa price', 'how much visa'],
    reply: visaReply,
  },
  {
    keywords: ['price', 'cost', 'pricing', 'fee', 'fees', 'how much', 'سعر', 'تكلفة'],
    reply: costGeneral,
  },
  {
    keywords: ['visa', 'golden', 'residency', 'immigration', 'فيزا', 'إقامة'],
    reply: visaReply,
  },
  {
    keywords: ['golden visa', '10 year', '10-year'],
    reply: goldenVisaReply,
  },
  {
    keywords: ['sponsor', 'local sponsor', 'partner', 'كفيل', 'شريك'],
    reply: sponsorReply,
  },
  {
    keywords: ['how long', 'time', 'timeline', 'duration', 'how fast', 'days', 'وقت', 'مدة'],
    reply: timelineReply,
  },
  {
    keywords: ['legal', 'law', 'ownership', 'condition', 'conditions', 'قانون', 'شروط'],
    reply: legalReply,
  },
  {
    keywords: ['mainland', 'free zone', 'freezone', 'compare', 'jurisdiction', 'منطقة'],
    reply: compareReply,
  },
  {
    keywords: ['bank', 'account', 'banking', 'حساب', 'بنك'],
    reply: bankReply,
  },
  {
    keywords: ['liquidation', 'close', 'cancel', 'deregister', 'إلغاء', 'تصفية'],
    reply: liquidationReply,
  },
  {
    keywords: ['license', 'trade', 'renewal', 'رخصة', 'تجارية'],
    reply: licenseReply,
  },
  {
    keywords: ['whatsapp', 'contact', 'consultant', 'call', 'talk', 'speak', 'واتساب', 'اتصال'],
    reply: consultantReply,
  },
];

/* ------------------------------------------------------------------ */
/* Smart typing suggestions                                            */
/* ------------------------------------------------------------------ */

type Suggestion = { label: string; reply: Reply };

const suggestionPool: { triggers: string[]; label: string; reply: Reply }[] = [
  { triggers: ['how much', 'cost', 'price', 'fee'], label: 'How much is a Free Zone?', reply: costFreeZone },
  { triggers: ['how much', 'cost', 'price', 'fee'], label: 'How much is a Mainland license?', reply: costMainland },
  { triggers: ['how much', 'cost', 'price', 'fee', 'visa'], label: 'Cost of a visa?', reply: visaReply },
  { triggers: ['visa', 'golden', 'residency'], label: 'What is the Golden Visa?', reply: goldenVisaReply },
  { triggers: ['sponsor', 'partner', 'ownership'], label: 'Do I need a local sponsor?', reply: sponsorReply },
  { triggers: ['time', 'how long', 'days', 'fast', 'timeline'], label: 'How long does setup take?', reply: timelineReply },
  { triggers: ['mainland', 'free zone', 'freezone', 'compare'], label: 'Mainland vs Free Zone?', reply: compareReply },
  { triggers: ['bank', 'account'], label: 'How to open a bank account?', reply: bankReply },
  { triggers: ['legal', 'law', 'condition', 'ownership'], label: 'What are the legal conditions?', reply: legalReply },
  { triggers: ['license', 'trade', 'renew'], label: 'How to get a trade license?', reply: licenseReply },
  { triggers: ['close', 'cancel', 'liquidation'], label: 'How to close a company?', reply: liquidationReply },
  { triggers: ['consultant', 'whatsapp', 'talk', 'speak', 'contact'], label: 'Speak with a consultant', reply: consultantReply },
];

function getSuggestions(query: string): Suggestion[] {
  const lower = query.toLowerCase().trim();
  if (lower.length < 2) return [];
  const seen = new Set<string>();
  const results: Suggestion[] = [];
  for (const item of suggestionPool) {
    if (seen.has(item.label)) continue;
    if (item.triggers.some((t) => lower.includes(t))) {
      seen.add(item.label);
      results.push({ label: item.label, reply: item.reply });
    }
  }
  return results.slice(0, 4);
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const welcomeMessage: Message = {
  id: 'welcome',
  sender: 'bot',
  text: 'Welcome to Central Hub. How can I assist with your UAE business setup today?',
};

let messageCounter = 0;
const nextId = () => `msg-${messageCounter++}`;

function parseInput(text: string): Reply {
  const lower = text.toLowerCase().trim();
  for (const entry of keywordMap) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.reply;
    }
  }
  return fallbackReply;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => getSuggestions(input), [input]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isTyping, open]);

  const pushBotReply = (reply: Reply) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), sender: 'bot', text: reply.text, actions: reply.actions }]);
    }, 650);
  };

  const sendUserMessage = (text: string, reply: Reply) => {
    setMessages((prev) => [...prev, { id: nextId(), sender: 'user', text }]);
    pushBotReply(reply);
  };

  const handleQuickOption = (option: QuickOption) => sendUserMessage(option.chip, option.reply);
  const handleSuggestion = (s: Suggestion) => {
    sendUserMessage(s.label, s.reply);
    setInput('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    sendUserMessage(text, parseInput(text));
    setInput('');
  };

  const handleNewChat = () => {
    setMessages([welcomeMessage]);
    setInput('');
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex h-[31rem] w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl md:w-96"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-slate-900 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/15">
                  <Hand className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-white">Central Hub Smart Assistant</p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    <span className="text-xs font-medium text-slate-400">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleNewChat}
                  aria-label="Start new chat"
                  title="New Chat"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-teal-400"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
              {messages.map((msg) => (
                <div key={msg.id} className={msg.sender === 'user' ? 'flex flex-col items-end' : 'flex flex-col items-start'}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'bot'
                        ? 'rounded-tl-sm bg-white text-navy-700'
                        : 'rounded-tr-sm bg-teal-500 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.actions.map((action) =>
                        action.type === 'link' ? (
                          <Link
                            key={action.label}
                            to={action.href}
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-100"
                          >
                            {action.label}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        ) : (
                          <a
                            key={action.label}
                            href={action.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-100"
                          >
                            {action.label}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-300" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick chips (only on fresh chat) */}
            {messages.length <= 1 && !isTyping && (
              <div className="flex flex-wrap gap-2 border-t border-slate-100 bg-white px-4 py-3">
                {quickOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleQuickOption(option)}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
                    >
                      <Icon className="mr-1.5 h-4 w-4 shrink-0 text-teal-600" />
                      {option.chip}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Smart typing suggestions */}
            <AnimatePresence>
              {suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100 bg-slate-50 px-4 pt-2.5"
                >
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                    <Sparkles className="h-3 w-3 text-teal-500" />
                    Suggestions
                  </div>
                  <div className="flex flex-wrap gap-2 pb-2.5">
                    {suggestions.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => handleSuggestion(s)}
                        className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-medium text-teal-700 transition-colors hover:bg-teal-50"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form onSubmit={handleSubmit} className="border-t border-slate-100 bg-white p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a question..."
                  className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-white shadow-lg shadow-teal-500/25 transition-transform duration-200 hover:scale-105"
                >
                  <Send className="h-4.5 w-4.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close assistant' : 'Open assistant'}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl shadow-teal-500/40 transition-all duration-200 hover:scale-110 hover:bg-teal-600"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-teal-400 text-[10px] font-bold text-white">
              1
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
