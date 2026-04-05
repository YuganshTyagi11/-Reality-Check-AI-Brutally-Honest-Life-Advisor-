const questionInput = document.getElementById('question');
const askBtn = document.getElementById('askBtn');
const output = document.getElementById('output');
const harshTruthEl = document.getElementById('harshTruth');
const logicListEl = document.getElementById('logicList');
const riskListEl = document.getElementById('riskList');
const actionListEl = document.getElementById('actionList');

const urgencyKeywords = [
  'quit',
  'break up',
  'move',
  'business',
  'startup',
  'job',
  'marry',
  'drop out',
  'invest',
  'debt'
];

function detectUrgency(question) {
  const lower = question.toLowerCase();
  return urgencyKeywords.some((k) => lower.includes(k));
}

function generateAdvice(question) {
  const urgent = detectUrgency(question);

  const harshTruth = urgent
    ? `You are treating "${question}" like a feeling problem, but it is a consequences problem. If you keep choosing based on mood, you will keep paying for avoidable mistakes.`
    : `You asked "${question}" because you want certainty without discomfort. That is not how real life works. Progress requires tradeoffs and short-term pain.`;

  const logic = [
    'Your current situation has hidden costs (time, stress, and opportunity loss).',
    'Every option is painful. The right option is the pain that buys long-term leverage.',
    'If your plan depends on motivation alone, it is weak. Reliable systems beat emotions.'
  ];

  const risks = urgent
    ? [
        'Acting too fast can create cash-flow and reputation damage you cannot quickly undo.',
        'Doing nothing keeps the same pain, but compounds regret and wasted years.',
        'Half-commitment causes the worst outcome: high stress with zero meaningful progress.'
      ]
    : [
        'Waiting for perfect clarity delays growth and shrinks optionality.',
        'Copying other people\'s path without matching their constraints backfires.',
        'Overthinking feels productive but usually hides fear of execution.'
      ];

  const plan = [
    'Define a 90-day target with one measurable outcome.',
    'Set a non-negotiable weekly execution schedule and track it publicly.',
    'Run a small, reversible test this week to reduce uncertainty with real data.',
    'At day 30, kill weak tactics and double down only on what works.',
    'If you miss two weeks in a row, simplify the plan instead of quitting.'
  ];

  return { harshTruth, logic, risks, plan };
}

function renderList(el, items) {
  el.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    el.appendChild(li);
  });
}

function handleAsk() {
  const question = questionInput.value.trim();
  if (!question) return;

  const advice = generateAdvice(question);
  harshTruthEl.textContent = advice.harshTruth;
  renderList(logicListEl, advice.logic);
  renderList(riskListEl, advice.risks);
  renderList(actionListEl, advice.plan);

  output.classList.remove('hidden');
}

askBtn.addEventListener('click', handleAsk);
questionInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleAsk();
  }
});
