const STORAGE_KEYS = {
  theme: "vvr-theme",
  personas: "vvr-personas",
  wines: "vvr-wines",
  customAromas: "vvr-custom-aromas",
  customVarietals: "vvr-custom-varietals",
  recoveryMode: "vvr-recovery-mode"
};

const ADMIN_EMAILS = ["jinmokju@gmail.com"];

const TASTE_FIELDS = [
  { key: "fruitDriven", label: "Fruitiness", left: "Fruit-Driven", right: "Savory / Earthy" },
  { key: "oak", label: "Oak", left: "New Oak", right: "Neutral Oak" },
  { key: "acidity", label: "Acidity", left: "High", right: "Low" },
  { key: "body", label: "Body", left: "Rich", right: "Lean" },
  { key: "fruitProfile", label: "Fruit Profile", left: "Dark Fruit", right: "Red Fruit" }
];

const VARIETAL_OPTIONS = {
  Red: ["Pinot Noir", "Cabernet Sauvignon", "Merlot", "Syrah", "Shiraz", "Grenache", "Tempranillo", "Sangiovese", "Nebbiolo", "Barbera", "Malbec", "Zinfandel", "Primitivo", "Cabernet Franc", "Petit Verdot", "Carmenere", "Mourvedre", "Gamay", "Dolcetto", "Aglianico", "Montepulciano", "Corvina", "Nerello Mascalese", "Touriga Nacional", "Mencia", "Trousseau", "Blaufrankisch", "Bobal", "Carignan", "Cinsault", "Counoise", "Petit Sirah", "Saperavi"],
  White: ["Chardonnay", "Sauvignon Blanc", "Riesling", "Chenin Blanc", "Semillon", "Pinot Gris", "Pinot Grigio", "Gewurztraminer", "Viognier", "Albarino", "Vermentino", "Marsanne", "Roussanne", "Grenache Blanc", "Clairette", "Ugni Blanc", "Trebbiano", "Arneis", "Cortese", "Verdicchio", "Fiano", "Greco", "Garganega", "Assyrtiko", "Silvaner", "Muscadet", "Melon de Bourgogne", "Torrontes", "Savagnin", "Gruner Veltliner", "Godello", "Timorasso", "Palomino", "Welschriesling"],
  Sparkling: ["Chardonnay", "Pinot Noir", "Pinot Meunier", "Pinot Blanc", "Pinot Gris", "Riesling", "Chenin Blanc", "Xarel-lo", "Macabeo", "Parellada", "Glera", "Lambrusco", "Semillon", "Aligote", "Arneis"],
  Rose: ["Grenache", "Cinsault", "Syrah", "Mourvedre", "Pinot Noir", "Sangiovese", "Tempranillo", "Nebbiolo", "Merlot", "Cabernet Sauvignon", "Cabernet Franc", "Gamay", "Corvina", "Aglianico", "Primitivo"],
  Orange: ["Ribolla Gialla", "Pinot Grigio", "Malvasia", "Sauvignon Blanc", "Chardonnay", "Rkatsiteli", "Gewurztraminer", "Muscat", "Vitovska", "Friulano", "Fiano", "Greco", "Vermentino", "Trebbiano", "Semillon"]
};

const REVIEW_STRUCTURE_FIELDS = {
  red: [
    { key: "sweetness", label: "Sweetness", left: "Sweet", right: "Dry", reverse: true },
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "tanninLevel", label: "Tannin Level", left: "High", right: "Low" },
    { key: "tanninTexture", label: "Tannin Texture", left: "Sticky", right: "Smooth" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ],
  white: [
    { key: "sweetness", label: "Sweetness", left: "Sweet", right: "Dry", reverse: true },
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "texture", label: "Texture", left: "Waxy / Oily", right: "Clean" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ],
  rose: [
    { key: "sweetness", label: "Sweetness", left: "Sweet", right: "Dry", reverse: true },
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "texture", label: "Texture", left: "Silky", right: "Crisp" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ],
  sparkling: [
    { key: "sweetness", label: "Sweetness", left: "Sweet", right: "Dry", reverse: true },
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "effervescence", label: "Effervescence", left: "Highly Fizzy", right: "Gentle Fizz" },
    { key: "mousseTexture", label: "Mousse Texture", left: "Creamy", right: "Sharp" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ],
  orange: [
    { key: "sweetness", label: "Sweetness", left: "Sweet", right: "Dry", reverse: true },
    { key: "acidityLevel", label: "Acidity Level", left: "High", right: "Low" },
    { key: "acidityShape", label: "Acidity Shape", left: "Racy", right: "Soft" },
    { key: "body", label: "Body", left: "High", right: "Low" },
    { key: "texture", label: "Texture", left: "Grippy", right: "Polished" },
    { key: "finish", label: "Finish", left: "Long", right: "Short" }
  ]
};

const REVIEW_STRUCTURE_GROUPS = {
  red: [
    ["sweetness", "body"],
    ["acidityLevel", "acidityShape"],
    ["tanninLevel", "tanninTexture"],
    ["finish"]
  ],
  white: [
    ["sweetness", "body"],
    ["acidityLevel", "acidityShape"],
    ["texture", "finish"]
  ],
  rose: [
    ["sweetness", "body"],
    ["acidityLevel", "acidityShape"],
    ["texture", "finish"]
  ],
  sparkling: [
    ["sweetness", "body"],
    ["acidityLevel", "acidityShape"],
    ["effervescence", "mousseTexture"],
    ["finish"]
  ],
  orange: [
    ["sweetness", "body"],
    ["acidityLevel", "acidityShape"],
    ["texture", "finish"]
  ]
};

const AROMA_OPTIONS = {
  primary: {
    red: {
      Fruit: ["Red Cherry", "Black Cherry", "Morello Cherry", "Sour Cherry", "Red Plum", "Black Plum", "Raspberry", "Wild Strawberry", "Strawberry Jam", "Cranberry", "Pomegranate", "Red Currant", "Blackcurrant", "Blackberry", "Blueberry", "Boysenberry", "Mulberry", "Fig", "Dried Fig", "Date"],
      Floral: ["Rose", "Violet", "Peony", "Lavender", "Hibiscus", "Potpourri"],
      Herbaceous: ["Fresh Herbs", "Thyme", "Rosemary", "Sage", "Mint", "Eucalyptus", "Bay Leaf", "Dill", "Tomato Leaf"],
      Spice: ["Black Pepper", "White Pepper", "Juniper", "Anise", "Licorice"],
      Earthy: ["Wet Earth", "Graphite", "Iron", "Crushed Rock"]
    },
    white: {
      Citrus: ["Lemon", "Lemon Zest", "Lime", "Grapefruit", "Pink Grapefruit", "Orange Zest", "Mandarin", "Yuzu"],
      Orchard: ["Green Apple", "Yellow Apple", "Pear", "Nashi Pear", "Quince", "Yellow Plum"],
      "Stone Fruit": ["White Peach", "Yellow Peach", "Apricot", "Nectarine"],
      Tropical: ["Pineapple", "Mango", "Papaya", "Passion Fruit", "Guava", "Lychee", "Melon", "Cantaloupe"],
      Floral: ["White Flowers", "Jasmine", "Acacia", "Orange Blossom", "Honeysuckle", "Elderflower", "Linden Blossom"],
      Herbaceous: ["Fresh Cut Grass", "Lemongrass", "Fennel", "Mint", "Thai Basil"],
      Mineral: ["Wet Stone", "Chalk", "Sea Spray", "Saline"]
    },
    rose: {
      "Red Fruit": ["Wild Strawberry", "Strawberry", "Raspberry", "Red Cherry", "Cranberry", "Pomegranate", "Red Currant", "Watermelon"],
      Citrus: ["Pink Grapefruit", "Blood Orange", "Orange Zest", "Lemon Peel", "Mandarin"],
      Floral: ["Rose Petal", "Rosehip", "Peony", "Hibiscus", "Orange Blossom", "Jasmine"],
      Herbal: ["Fresh Herbs", "Thyme", "Mint", "Fennel", "Dried Herbs"],
      Mineral: ["Wet Stone", "Saline", "Chalk"]
    },
    sparkling: {
      Citrus: ["Lemon", "Lemon Curd", "Lime", "Grapefruit", "Mandarin", "Orange Zest"],
      Orchard: ["Green Apple", "Yellow Apple", "Pear", "Quince"],
      "Stone Fruit": ["White Peach", "Apricot", "Nectarine"],
      Floral: ["White Flowers", "Acacia", "Apple Blossom", "Linden Blossom"],
      "Autolytic Freshness": ["Fresh Bread", "Biscuit", "Crushed Oyster Shell", "Chalk", "Saline"],
      "Berry Accent": ["Wild Strawberry", "Red Currant", "Raspberry"]
    },
    orange: {
      Citrus: ["Orange Peel", "Mandarin", "Dried Orange Peel", "Bergamot", "Candied Citrus"],
      Orchard: ["Apricot", "Dried Apricot", "Quince", "Yellow Apple", "Pear"],
      "Tea / Herbal": ["Black Tea", "Chamomile", "Earl Grey", "Dried Herbs", "Sage", "Thyme"],
      Floral: ["Orange Blossom", "Jasmine", "Chamomile Flower", "Potpourri"],
      "Resin / Spice": ["Ginger", "Coriander Seed", "Turmeric", "Resin", "Frankincense"],
      Savory: ["Hay", "Walnut Skin", "Almond Skin", "Beeswax"]
    }
  },
  secondary: {
    red: {
      Oak: ["Vanilla", "Oak Toast", "Toast", "Cedar", "Sandalwood", "Coconut"],
      "Baking Spice": ["Clove", "Nutmeg", "Cinnamon", "Allspice", "Star Anise", "Sweet Spice"],
      Roasted: ["Coffee", "Espresso", "Mocha", "Cacao", "Dark Chocolate", "Smoke", "Char", "Toasted Oak"],
      "Malo / Lees": ["Butter", "Cream", "Yogurt", "Sour Cream"],
      Nutty: ["Toasted Almond", "Hazelnut", "Walnut"],
      "Sweet Oak": ["Caramel", "Butterscotch", "Toffee"]
    },
    white: {
      Oak: ["Vanilla", "Oak Toast", "Toast", "Cedar", "Coconut", "Smoke"],
      "Baking Spice": ["Clove", "Nutmeg", "Cinnamon", "Sweet Spice", "Ginger Spice"],
      "Lees / Autolysis": ["Brioche", "Bread Dough", "Toast", "Cream", "Butter", "Yogurt"],
      Nutty: ["Hazelnut", "Toasted Almond", "Marzipan", "Walnut"],
      "Sweet Oak": ["Caramel", "Butterscotch", "Toffee", "Creme Brulee"],
      "Grainy / Roasted": ["Roasted Grain", "Oatmeal", "Shortbread"]
    },
    rose: {
      "Lees / Creamy": ["Cream", "Yogurt", "Lees Stirring", "Soft Brioche"],
      Spice: ["Pink Peppercorn", "White Pepper", "Sweet Spice", "Ginger"],
      Oak: ["Subtle Vanilla", "Light Toast", "Oak Spice"],
      Savory: ["Dried Herbs", "Tomato Leaf", "Wild Fennel"]
    },
    sparkling: {
      Autolysis: ["Brioche", "Bread Dough", "Toast", "Biscuit", "Croissant"],
      Nutty: ["Hazelnut", "Almond Cream", "Marzipan"],
      Creamy: ["Butter", "Cream", "Lemon Curd", "Custard"],
      "Oak / Spice": ["Vanilla", "Toast", "Sweet Spice", "Cinnamon"],
      Roasted: ["Roasted Almond", "Coffee Bean", "Smoked Bread"]
    },
    orange: {
      "Skin Contact": ["Black Tea", "Orange Pith", "Tannin Grip", "Dry Herb", "Resin"],
      Oxidative: ["Bruised Apple", "Walnut", "Almond", "Cider-like Note"],
      Spice: ["Ginger", "Clove", "Nutmeg", "Turmeric", "Coriander"],
      "Lees / Texture": ["Yeast", "Bread Dough", "Beeswax", "Lanolin"]
    }
  },
  tertiary: {
    red: {
      "Earth / Forest": ["Forest Floor", "Underbrush", "Mushroom", "Truffle", "Wet Leaves", "Autumn Leaves", "Humus"],
      Savory: ["Leather", "Game", "Dried Meat", "Bouillon", "Soy", "Umami"],
      "Tobacco / Wood": ["Tobacco", "Cigar Box", "Pipe Tobacco", "Old Cedar", "Sawdust"],
      "Dried Fruit / Floral": ["Dried Cherry", "Dried Plum", "Raisin", "Prune", "Dried Rose", "Potpourri"],
      "Oxidative / Balsamic": ["Balsamic", "Soy Glaze", "Maderized Note", "Volatile Lift", "Tea Leaf"],
      "Mineral / Tertiary": ["Earth", "Dust", "Graphite", "Iron Rust"]
    },
    white: {
      Honeyed: ["Honey", "Acacia Honey", "Beeswax", "Lanolin"],
      "Nutty / Oxidative": ["Hazelnut", "Walnut", "Almond Cream", "Sherry-like Note", "Marzipan"],
      "Mushroom / Earth": ["Mushroom", "Truffle", "Hay", "Dried Hay", "Chamomile"],
      "Petrol / Resinous": ["Petrol", "Kerosene", "Paraffin", "Resin"],
      "Dried Fruit / Citrus": ["Dried Apricot", "Candied Citrus Peel", "Dried Lemon Peel", "Quince Paste"],
      "Bakery / Mature Lees": ["Brioche", "Toast", "Croissant", "Mushroom Butter"]
    },
    rose: {
      "Dried Fruit / Floral": ["Dried Strawberry", "Rosehip", "Dried Rose", "Potpourri"],
      "Savory / Earth": ["Dried Herbs", "Tea Leaf", "Dust", "Autumn Leaves"],
      Oxidative: ["Blood Orange Marmalade", "Dried Citrus", "Nutty Oxidation"]
    },
    sparkling: {
      "Mature Autolysis": ["Toasted Brioche", "Hazelnut", "Mushroom Butter", "Roasted Almond"],
      "Honeyed / Oxidative": ["Honey", "Beeswax", "Baked Apple", "Tarte Tatin"],
      "Mineral / Umami": ["Chalk Dust", "Truffle", "Umami", "Sea Salt"],
      "Dried Citrus / Fruit": ["Candied Lemon Peel", "Dried Apricot", "Quince Paste"]
    },
    orange: {
      "Oxidative / Nutty": ["Walnut", "Hazelnut", "Sherry-like Note", "Rancio", "Almond Skin"],
      "Tea / Herbal": ["Black Tea", "Chamomile", "Dried Herbs", "Tobacco Leaf"],
      "Resin / Honeyed": ["Beeswax", "Lanolin", "Resin", "Honeycomb"],
      "Earthy / Dried Fruit": ["Hay", "Dried Apricot", "Orange Marmalade", "Mushroom"]
    }
  }
};

const createTaste = (favoritePairs, fruitDriven, oak, acidity, body, fruitProfile) => ({
  favoritePairs,
  fruitDriven,
  oak,
  acidity,
  body,
  fruitProfile
});

const seedPersonas = [];

const seedWines = [
  {
    id: "w1",
    name: "Domaine de la Cote Bloom's Field",
    vintage: "2021",
    type: "Red",
    varietal: "Pinot Noir",
    region: "Santa Rita Hills, USA",
    averagePrice: "KRW 165,000",
    image: makePlaceholderImage("Bloom's Field", "#b04158", "#efd8c8"),
    reviews: [
      { id: "local-r1", personaId: "mina", note: "산뜻한 붉은 과실과 또렷한 산도가 앞에 나서고, 오크는 과하지 않게 받쳐 주는 스타일입니다.", createdAt: "2026-04-08" },
      { id: "local-r2", personaId: "soyeon", note: "향이 빨리 열리고 피니시가 깔끔해 마시기 편한 방향이었습니다.", createdAt: "2026-04-09" }
    ]
  },
  {
    id: "w2",
    name: "Kumeu River Chardonnay",
    vintage: "2022",
    type: "White",
    varietal: "Chardonnay",
    region: "Auckland, New Zealand",
    averagePrice: "KRW 52,000",
    image: makePlaceholderImage("Kumeu River", "#d2b04c", "#fff0c5"),
    reviews: [
      { id: "local-r3", personaId: "jun", note: "가벼운 바디 안에서 산도와 미네랄이 살아 있어 음식과 곁들이기 좋았습니다.", createdAt: "2026-04-07" },
      { id: "local-r4", personaId: "eun", note: "오크가 과하게 드러나기보다 과실과 질감을 정리해 주는 쪽이라 마무리가 편안했습니다.", createdAt: "2026-04-10" }
    ]
  }
];

const state = {
  selectedPersona: "all",
  selectedType: "All",
  query: "",
  personas: [],
  wines: [],
  supabase: null,
  session: null,
  isAdmin: false,
  recoveryMode: false,
  recoveryError: "",
  reviewFormMode: "create",
  editingWineId: null,
  editingReviewId: null,
  tasteDraft: { fruitDriven: 4, oak: 4, acidity: 4, body: 4, fruitProfile: 4 },
  reviewDraft: createEmptyReviewDraft("Red"),
  customAromas: createEmptyCustomAromas(),
  customVarietals: loadLocal(STORAGE_KEYS.customVarietals || "vvr-custom-varietals", {}),
  imageCandidates: []
};

const el = {
  body: document.body,
  themeToggle: document.getElementById("themeToggle"),
  personaFilters: document.getElementById("personaFilters"),
  reviewerFilters: document.getElementById("reviewerFilters"),
  typeFilters: document.getElementById("typeFilters"),
  personaGrid: document.getElementById("personaGrid"),
  wineGrid: document.getElementById("wineGrid"),
  recentGrid: document.getElementById("recentGrid"),
  searchInput: document.getElementById("searchInput"),
  reviewForm: document.getElementById("reviewForm"),
  tasteForm: document.getElementById("tasteForm"),
  reviewPersona: document.getElementById("reviewPersona"),
  wineType: document.getElementById("wineType"),
  wineName: document.getElementById("wineName"),
  wineVintage: document.getElementById("wineVintage"),
  wineVarietal: document.getElementById("wineVarietal"),
  wineProducer: document.getElementById("wineProducer"),
  wineNameOptions: document.getElementById("wineNameOptions"),
  wineVintageOptions: document.getElementById("wineVintageOptions"),
  wineVarietalOptions: document.getElementById("wineVarietalOptions"),
  wineRegionOptions: document.getElementById("wineRegionOptions"),
  wineSubRegionOptions: document.getElementById("wineSubRegionOptions"),
  wineNameMeta: document.getElementById("wineNameMeta"),
  wineRegion: document.getElementById("wineRegion"),
  wineSubRegion: document.getElementById("wineSubRegion"),
  winePrice: document.getElementById("winePrice"),
  wineImage: document.getElementById("wineImage"),
  wineImageLibrary: document.getElementById("wineImageLibrary"),
  wineImageCamera: document.getElementById("wineImageCamera"),
  uploadFallbackPanel: document.getElementById("uploadFallbackPanel"),
  uploadFallbackNote: document.getElementById("uploadFallbackNote"),
  wineImagePreview: document.getElementById("wineImagePreview"),
  imagePreviewCard: document.getElementById("imagePreviewCard"),
  imagePreviewPlaceholder: document.getElementById("imagePreviewPlaceholder"),
  imagePreviewCaption: document.getElementById("imagePreviewCaption"),
  clearImageButton: document.getElementById("clearImageButton"),
  reviewStructureEditor: document.getElementById("reviewStructureEditor"),
  primaryAromaSelector: document.getElementById("primaryAromaSelector"),
  secondaryAromaSelector: document.getElementById("secondaryAromaSelector"),
  tertiaryAromaSelector: document.getElementById("tertiaryAromaSelector"),
  primaryAromaSelected: document.getElementById("primaryAromaSelected"),
  secondaryAromaSelected: document.getElementById("secondaryAromaSelected"),
  tertiaryAromaSelected: document.getElementById("tertiaryAromaSelected"),
  overallScore: document.getElementById("overallScore"),
  wineReview: document.getElementById("wineReview"),
  fetchImageCandidates: document.getElementById("fetchImageCandidates"),
  fetchPriceData: document.getElementById("fetchPriceData"),
  fetchStatus: document.getElementById("fetchStatus"),
  reviewStatus: document.getElementById("reviewStatus"),
  imageCandidateGrid: document.getElementById("imageCandidateGrid"),
  tastePersona: document.getElementById("tastePersona"),
  tasteMode: document.getElementById("tasteMode"),
  personaNameInput: document.getElementById("personaNameInput"),
  personaSummaryInput: document.getElementById("personaSummaryInput"),
  favVarietyOne: document.getElementById("favVarietyOne"),
  favRegionOne: document.getElementById("favRegionOne"),
  favVarietyTwo: document.getElementById("favVarietyTwo"),
  favRegionTwo: document.getElementById("favRegionTwo"),
  tasteEditor: document.getElementById("tasteEditor"),
  storageStatus: document.getElementById("storageStatus"),
  storageNote: document.getElementById("storageNote"),
  personaCount: document.getElementById("personaCount"),
  wineCount: document.getElementById("wineCount"),
  reviewCount: document.getElementById("reviewCount"),
  regionCount: document.getElementById("regionCount"),
  authForm: document.getElementById("authForm"),
  adminEmail: document.getElementById("adminEmail"),
  adminPassword: document.getElementById("adminPassword"),
  authStatus: document.getElementById("authStatus"),
  loginButton: document.getElementById("loginButton"),
  signupButton: document.getElementById("signupButton"),
  passwordResetButton: document.getElementById("passwordResetButton"),
  logoutButton: document.getElementById("logoutButton"),
  passwordRecoveryPanel: document.getElementById("passwordRecoveryPanel"),
  passwordRecoveryForm: document.getElementById("passwordRecoveryForm"),
  passwordRecoveryHelp: document.getElementById("passwordRecoveryHelp"),
  passwordRecoverySubmit: document.getElementById("passwordRecoverySubmit"),
  passwordRecoveryCancel: document.getElementById("passwordRecoveryCancel"),
  newPassword: document.getElementById("newPassword"),
  confirmPassword: document.getElementById("confirmPassword"),
  authBadge: document.getElementById("authBadge"),
  authHelp: document.getElementById("authHelp"),
  reviewSubmitLabel: document.getElementById("reviewSubmitLabel"),
  cancelEditButton: document.getElementById("cancelEditButton"),
  deletePersonaButton: document.getElementById("deletePersonaButton")
};

init();

async function init() {
  hydrateTheme();
  await initializeSupabase();
  await bootstrapRecoveryFlow();
  bindEvents();
  await hydrateData();
  populatePersonaOptions();
  syncTasteEditor();
  resetReviewForm();
  await refreshSession();
  updateStorageStatus();
  renderAll();
}

function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function ensureSupabaseClient() {
  if (window.supabase) return true;
  const sources = [
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2",
    "https://unpkg.com/@supabase/supabase-js@2"
  ];
  for (const src of sources) {
    try {
      await loadExternalScript(src);
      if (window.supabase) return true;
    } catch (error) {
      console.warn("Supabase script load failed", src, error);
    }
  }
  return false;
}

async function initializeSupabase() {
  if (!window.VVR_SUPABASE_URL || !window.VVR_SUPABASE_ANON_KEY) return;
  const isLoaded = await ensureSupabaseClient();
  if (isLoaded && window.supabase) {
    state.supabase = window.supabase.createClient(window.VVR_SUPABASE_URL, window.VVR_SUPABASE_ANON_KEY);
  }
}

async function refreshSession() {
  if (!state.supabase) {
    updateAuthUi();
    return;
  }

  const { data } = await state.supabase.auth.getSession();
  state.session = data.session || null;
  state.isAdmin = isAdminEmail(state.session?.user?.email);
  state.recoveryMode = state.recoveryMode || (sessionStorage.getItem(STORAGE_KEYS.recoveryMode) === "1" && Boolean(state.session));

  state.supabase.auth.onAuthStateChange((event, session) => {
    state.session = session || null;
    state.isAdmin = isAdminEmail(state.session?.user?.email);
    if (event === "PASSWORD_RECOVERY") {
      state.recoveryMode = true;
      state.recoveryError = "";
      sessionStorage.setItem(STORAGE_KEYS.recoveryMode, "1");
    }
    if (event === "USER_UPDATED") {
      state.recoveryMode = false;
      state.recoveryError = "";
      sessionStorage.removeItem(STORAGE_KEYS.recoveryMode);
    }
    updateAuthUi();
    renderAll();
  });

  updateAuthUi();
}

async function bootstrapRecoveryFlow() {
  const hash = window.location.hash.startsWith("#") ? window.location.hash.slice(1) : "";
  if (!hash) {
    return;
  }

  const params = new URLSearchParams(hash);
  const errorCode = params.get("error_code");
  const errorDescription = params.get("error_description");
  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");
  const type = params.get("type");

  if (errorCode) {
    state.recoveryMode = false;
    state.recoveryError = decodeURIComponentSafe(errorDescription || errorCode);
    clearAuthHash();
    return;
  }

  if (!state.supabase) {
    return;
  }

  if (type === "recovery" && accessToken && refreshToken) {
    const { data, error } = await state.supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken
    });
    state.recoveryMode = !error;
    state.recoveryError = error ? error.message : "";
    state.session = data?.session || state.session;
    state.isAdmin = isAdminEmail(state.session?.user?.email);
    if (!error) {
      sessionStorage.setItem(STORAGE_KEYS.recoveryMode, "1");
    }
    clearAuthHash();
  }
}

function isAdminEmail(email) {
  return Boolean(email && ADMIN_EMAILS.includes(email.toLowerCase()));
}
async function hydrateData() {
  state.personas = loadLocal(STORAGE_KEYS.personas, seedPersonas);
  state.wines = loadLocal(STORAGE_KEYS.wines, seedWines).map(normalizeLocalWine);
  state.customAromas = normalizeCustomAromas(loadLocal(STORAGE_KEYS.customAromas, createEmptyCustomAromas()));

  if (!state.supabase) {
    return;
  }

  try {
    const [personasResult, winesResult, reviewsResult, commentsResult] = await Promise.all([
      state.supabase.from("personas").select("*").order("display_order"),
      state.supabase.from("wines").select("*").order("created_at", { ascending: false }),
      state.supabase.from("reviews").select("*").order("created_at", { ascending: false }),
      state.supabase.from("comments").select("*").order("created_at", { ascending: true })
    ]);

    if (!personasResult.error && personasResult.data?.length) {
      state.personas = personasResult.data.map(normalizePersonaRow);
    }

    if (!winesResult.error && winesResult.data?.length) {
      const commentsByReview = groupCommentsByReview(commentsResult.data || []);
      const reviewsByWine = groupReviewsByWine(reviewsResult.data || [], commentsByReview);
      state.wines = winesResult.data.map((row) => normalizeWineRow(row, reviewsByWine[row.id] || []));
    }
  } catch (error) {
    console.error(error);
  }
}

function groupCommentsByReview(rows) {
  return rows.reduce((accumulator, row) => {
    const reviewKey = String(row.review_id);
    if (!accumulator[reviewKey]) {
      accumulator[reviewKey] = [];
    }
    accumulator[reviewKey].push(normalizeComment(row));
    return accumulator;
  }, {});
}

function groupReviewsByWine(rows, commentsByReview = {}) {
  return rows.reduce((accumulator, row) => {
    if (!accumulator[row.wine_id]) {
      accumulator[row.wine_id] = [];
    }
    accumulator[row.wine_id].push({
      id: row.id,
      personaId: row.persona_id,
      note: row.note,
      summary: row.summary,
      overallScore: row.overall_score,
      structure: row.structure,
      primaryAromas: row.primary_aromas,
      secondaryAromas: row.secondary_aromas,
      tertiaryAromas: row.tertiary_aromas,
      comments: commentsByReview[String(row.id)] || [],
      createdAt: (row.created_at || new Date().toISOString()).slice(0, 10)
    });
    return accumulator;
  }, {});
}

function normalizePersonaRow(row) {
  const persona = {
    id: row.id,
    name: row.name,
    role: row.role,
    focus: row.focus,
    summary: row.role || "",
    tastes: {
      red: normalizeTaste(row.red_taste),
      white: normalizeTaste(row.white_taste)
    }
  };
  return persona;
}

function normalizeWineRow(row, reviews) {
  return {
    id: row.id,
    name: row.name,
    producer: row.producer,
    vintage: row.vintage,
    type: row.type,
    varietal: row.varietal,
    region: row.region,
    subRegion: row.sub_region || row.subRegion || "",
    averagePrice: row.average_price,
    image: sanitizeStoredImage(row.image_url),
    reviews: (reviews || []).map((review) => normalizeReview(review, row.type))
  };
}

function normalizeLocalWine(wine) {
  return {
    ...wine,
    subRegion: wine.subRegion || "",
    image: sanitizeStoredImage(wine.image),
    reviews: (wine.reviews || []).map((review) => normalizeReview(review, wine.type))
  };
}

function sanitizeStoredImage(value) {
  const image = String(value || "").trim();
  return isUsableImageUrl(image) && !isPlaceholderImage(image) ? image : "";
}

function normalizeReview(review, wineType) {
  const typeKey = getReviewTypeKey(wineType);
  return {
    id: review.id || `local-${cryptoRandomId()}`,
    personaId: review.personaId,
    note: review.summary || review.note || "",
    summary: review.summary || review.note || "",
    overallScore: typeof review.overallScore === "number" ? review.overallScore : (review.overall_score ?? ""),
    structure: normalizeReviewStructure(review.structure, typeKey),
    primaryAromas: normalizeAromaList(review.primaryAromas || review.primary_aromas),
    secondaryAromas: normalizeAromaList(review.secondaryAromas || review.secondary_aromas),
    tertiaryAromas: normalizeAromaList(review.tertiaryAromas || review.tertiary_aromas),
    comments: (review.comments || []).map(normalizeComment),
    createdAt: review.createdAt || (review.created_at ? String(review.created_at).slice(0, 10) : new Date().toISOString().slice(0, 10))
  };
}

function normalizeComment(comment) {
  return {
    id: comment.id || `comment-${cryptoRandomId()}`,
    authorName: comment.authorName || comment.author_name || "Guest",
    body: comment.body || "",
    createdAt: comment.createdAt
      || (comment.created_at ? String(comment.created_at).slice(0, 10) : new Date().toISOString().slice(0, 10))
  };
}

function normalizeTaste(taste) {
  const favoritePairs = Array.isArray(taste?.favoritePairs)
    ? taste.favoritePairs
    : [
        {
          varietal: Array.isArray(taste?.favorites) ? (taste.favorites[0] || "") : (taste?.varietal || ""),
          region: taste?.region || ""
        },
        {
          varietal: Array.isArray(taste?.favorites) ? (taste.favorites[1] || "") : "",
          region: ""
        }
      ];

  return {
    favoritePairs: [
      {
        varietal: favoritePairs[0]?.varietal || "",
        region: favoritePairs[0]?.region || ""
      },
      {
        varietal: favoritePairs[1]?.varietal || "",
        region: favoritePairs[1]?.region || ""
      }
    ],
    fruitDriven: taste?.fruitDriven || 4,
    oak: taste?.oak || 4,
    acidity: taste?.acidity || 4,
    body: taste?.body || 4,
    fruitProfile: taste?.fruitProfile || 4
  };
}

function createEmptyTaste() {
  return normalizeTaste({});
}

function getReviewTypeKey(type) {
  if (type === "Sparkling") {
    return "sparkling";
  }
  if (type === "Rose") {
    return "rose";
  }
  if (type === "Orange") {
    return "orange";
  }
  if (type === "Red") {
    return "red";
  }
  return "white";
}

function getAromaTypeKey(type) {
  if (type === "Rose") {
    return "rose";
  }
  if (type === "Sparkling") {
    return "sparkling";
  }
  if (type === "Orange") {
    return "orange";
  }
  if (type === "Red") {
    return "red";
  }
  return "white";
}

function getStructureFields(type) {
  return REVIEW_STRUCTURE_FIELDS[getReviewTypeKey(type)];
}

function getStructureFieldMap(type) {
  return Object.fromEntries(getStructureFields(type).map((field) => [field.key, field]));
}

function getStructureGroups(type) {
  const typeKey = getReviewTypeKey(type);
  const fieldMap = getStructureFieldMap(type);
  const configuredGroups = REVIEW_STRUCTURE_GROUPS[typeKey] || [Object.keys(fieldMap)];
  return configuredGroups
    .map((group) => group.map((fieldKey) => fieldMap[fieldKey]).filter(Boolean))
    .filter((group) => group.length);
}

function normalizeScaleValue(value) {
  return Math.max(1, Math.min(7, Number(value) || 4));
}

function getDisplayedScaleValue(value, reversed = false) {
  const normalized = normalizeScaleValue(value);
  return reversed ? 8 - normalized : normalized;
}

function getStoredScaleValue(value, reversed = false) {
  const normalized = normalizeScaleValue(value);
  return reversed ? 8 - normalized : normalized;
}

function createEmptyReviewDraft(type) {
  const typeKey = getReviewTypeKey(type);
  return {
    structure: normalizeReviewStructure({}, typeKey),
    primaryAromas: [],
    secondaryAromas: [],
    tertiaryAromas: []
  };
}

function createEmptyCustomAromas() {
  const types = ["red", "white", "rose", "sparkling", "orange"];
  const categories = ["primary", "secondary", "tertiary"];
  return categories.reduce((categoryAcc, category) => {
    categoryAcc[category] = types.reduce((typeAcc, type) => {
      typeAcc[type] = {};
      return typeAcc;
    }, {});
    return categoryAcc;
  }, {});
}

function normalizeCustomAromas(value) {
  const base = createEmptyCustomAromas();
  for (const category of Object.keys(base)) {
    for (const type of Object.keys(base[category])) {
      const groups = value?.[category]?.[type];
      if (!groups || typeof groups !== "object") {
        continue;
      }
      base[category][type] = Object.fromEntries(
        Object.entries(groups).map(([groupName, notes]) => [groupName, Array.isArray(notes) ? notes.filter(Boolean) : []])
      );
    }
  }
  return base;
}

function normalizeReviewStructure(structure, typeKey) {
  const fields = REVIEW_STRUCTURE_FIELDS[typeKey] || REVIEW_STRUCTURE_FIELDS.white;
  return fields.reduce((accumulator, field) => {
    accumulator[field.key] = structure?.[field.key] || 4;
    return accumulator;
  }, {});
}

function normalizeAromaList(values) {
  return Array.isArray(values) ? values.filter(Boolean) : [];
}

function normalizeAromaLabel(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function getAromaOptions(category, type) {
  return Object.values(getAromaGroups(category, type)).flat();
}

function getAromaGroups(category, type) {
  const typeKey = getAromaTypeKey(type);
  const baseGroups = AROMA_OPTIONS[category][typeKey] || {};
  const customGroups = state.customAromas[category][typeKey] || {};
  const merged = {};

  for (const groupName of new Set([...Object.keys(baseGroups), ...Object.keys(customGroups)])) {
    merged[groupName] = [
      ...(Array.isArray(baseGroups[groupName]) ? baseGroups[groupName] : []),
      ...(Array.isArray(customGroups[groupName]) ? customGroups[groupName] : [])
    ].filter(Boolean);
  }

  return merged;
}

function findMatchingAroma(category, type, candidate) {
  const normalized = normalizeAromaLabel(candidate);
  const options = getAromaOptions(category, type);
  return options.find((item) => normalizeAromaLabel(item) === normalized)
    || options.find((item) => normalizeAromaLabel(item).includes(normalized) || normalized.includes(normalizeAromaLabel(item)));
}

function addCustomAroma(category, type, groupName, rawValue) {
  const value = rawValue.trim();
  if (!value) {
    return { ok: false, message: "새 향미를 입력해 주세요." };
  }

  const match = findMatchingAroma(category, type, value);
  if (match) {
    toggleAromaSelection(category, match, true);
    return { ok: false, message: `비슷한 향미 '${match}'가 이미 있어서 그 항목을 바로 선택했습니다.` };
  }

  const typeKey = getAromaTypeKey(type);
  if (!state.customAromas[category][typeKey][groupName]) {
    state.customAromas[category][typeKey][groupName] = [];
  }
  state.customAromas[category][typeKey][groupName].push(value);
  state.customAromas[category][typeKey][groupName].sort((a, b) => a.localeCompare(b));
  saveLocal();
  toggleAromaSelection(category, value, true);
  return { ok: true, message: `'${value}' 향미를 새 항목으로 추가했습니다.` };
}

function loadLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : structuredClone(fallback);
  } catch (error) {
    return structuredClone(fallback);
  }
}

function saveLocal() {
  localStorage.setItem(STORAGE_KEYS.personas, JSON.stringify(state.personas));
  localStorage.setItem(STORAGE_KEYS.wines, JSON.stringify(state.wines));
  localStorage.setItem(STORAGE_KEYS.customAromas, JSON.stringify(state.customAromas));
  localStorage.setItem(STORAGE_KEYS.customVarietals, JSON.stringify(state.customVarietals));
}

function hydrateTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    el.body.classList.add("dark-mode");
  }
  syncThemeButton();
}

function syncThemeButton() {
  el.themeToggle.textContent = el.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
}

function bindEvents() {
  el.themeToggle.addEventListener("click", () => {
    el.body.classList.toggle("dark-mode");
    localStorage.setItem(STORAGE_KEYS.theme, el.body.classList.contains("dark-mode") ? "dark" : "light");
    syncThemeButton();
  });

  el.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderWines();
  });

  el.wineType.addEventListener("change", syncReviewEditor);
  el.wineType.addEventListener("change", populateReviewInputs);
  el.wineType.addEventListener("change", updateWineNameMeta);
  el.wineName.addEventListener("change", handleWineNameSelection);
  el.wineName.addEventListener("blur", handleWineNameSelection);
  el.wineVarietal.addEventListener("change", persistCustomVarietalFromInput);
  el.wineVarietal.addEventListener("blur", persistCustomVarietalFromInput);
  el.wineVarietal.addEventListener("change", populateReviewInputs);
  el.wineVarietal.addEventListener("blur", populateReviewInputs);
  el.wineRegion.addEventListener("change", populateReviewInputs);
  el.wineRegion.addEventListener("blur", populateReviewInputs);
  el.tastePersona.addEventListener("change", syncTasteEditor);
  el.tasteMode.addEventListener("change", syncTasteEditor);
  el.reviewForm.addEventListener("submit", handleReviewSave);
  el.tasteForm.addEventListener("submit", handleTasteSave);
  el.fetchImageCandidates.addEventListener("click", handleImageLookup);
  el.fetchPriceData.addEventListener("click", handlePriceLookup);
  el.wineImage.addEventListener("input", syncImagePreview);
  el.wineImageLibrary?.addEventListener("change", (event) => handleImageUpload(event, "\uC0AC\uC9C4 \uBCF4\uAD00\uD568 \uC5C5\uB85C\uB4DC"));
  el.wineImageCamera?.addEventListener("change", (event) => handleImageUpload(event, "\uCE74\uBA54\uB77C \uCD2C\uC601 \uC5C5\uB85C\uB4DC"));
  el.clearImageButton.addEventListener("click", clearImageField);
  el.authForm.addEventListener("submit", handleLogin);
  el.signupButton.addEventListener("click", handleSignup);
  el.passwordResetButton.addEventListener("click", handlePasswordResetRequest);
  el.logoutButton.addEventListener("click", handleLogout);
  el.passwordRecoveryForm.addEventListener("submit", handlePasswordRecoverySubmit);
  el.passwordRecoveryCancel.addEventListener("click", cancelPasswordRecovery);
  el.cancelEditButton.addEventListener("click", resetReviewForm);
  el.deletePersonaButton.addEventListener("click", handlePersonaDelete);
}

function populatePersonaOptions() {
  const reviewOptions = state.personas.length
    ? state.personas.map((persona) => `<option value="${persona.id}">${persona.name}</option>`).join("")
    : '<option value="">\uD398\uB974\uC18C\uB098\uB97C \uBA3C\uC800 \uCD94\uAC00\uD574 \uC8FC\uC138\uC694</option>';
  const tasteOptions = ['<option value="__new__">+ New Persona</option>']
    .concat(state.personas.map((persona) => `<option value="${persona.id}">${persona.name}</option>`))
    .join("");

  el.reviewPersona.innerHTML = reviewOptions;
  el.tastePersona.innerHTML = tasteOptions;

  if (!el.reviewPersona.value) {
    el.reviewPersona.value = state.personas[0]?.id || "";
  }
  if (!el.tastePersona.value) {
    el.tastePersona.value = state.personas[0]?.id || "__new__";
  }
  populateReviewInputs();
}

function populateReviewInputs() {
  const wineOptions = state.wines
    .map((wine) => `<option value="${escapeHtml(wine.name)}">${[
      wine.producer,
      wine.vintage,
      wine.varietal,
      formatRegionPath(wine.region, wine.subRegion),
      `${wine.reviews.length}\uac1c \ub9ac\ubdf0`
    ].filter(Boolean).join(" / ")}</option>`)
    .join("");
  el.wineNameOptions.innerHTML = wineOptions;

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= 1980; year -= 1) {
    years.push(String(year));
  }
  const existingVintages = [...new Set(state.wines.map((wine) => wine.vintage).filter(Boolean))];
  const vintageOptions = [...new Set([...existingVintages, ...years])];
  el.wineVintageOptions.innerHTML = vintageOptions.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");

  const type = el.wineType.value || "Red";
  const varietalOptions = getVarietalOptions(type);
  el.wineVarietalOptions.innerHTML = varietalOptions.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");

  const currentVarietal = el.wineVarietal.value.trim().toLowerCase();
  const regionSource = state.wines.filter((wine) => {
    if (wine.type !== type) {
      return false;
    }
    if (!currentVarietal) {
      return true;
    }
    return String(wine.varietal || "").toLowerCase() === currentVarietal;
  });
  const regionOptions = [...new Set(regionSource.map((wine) => wine.region).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  el.wineRegionOptions.innerHTML = regionOptions.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");
  const currentRegion = el.wineRegion.value.trim().toLowerCase();
  const subRegionSource = regionSource.filter((wine) => !currentRegion || String(wine.region || "").toLowerCase() === currentRegion);
  const subRegionOptions = [...new Set(subRegionSource.map((wine) => wine.subRegion).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  el.wineSubRegionOptions.innerHTML = subRegionOptions.map((value) => `<option value="${escapeHtml(value)}"></option>`).join("");
  updateWineNameMeta();
}

function getVarietalOptions(type) {
  const builtin = VARIETAL_OPTIONS[type] || [];
  const custom = Array.isArray(state.customVarietals[type]) ? state.customVarietals[type] : [];
  return [...new Set([...builtin, ...custom])].sort((a, b) => a.localeCompare(b));
}

function handleWineNameSelection() {
  const name = el.wineName.value.trim();
  if (!name) {
    state.imageCandidates = [];
    renderImageCandidates();
    updateWineNameMeta();
    return;
  }

  const wine = state.wines.find((item) => item.name.toLowerCase() === name.toLowerCase());
  if (!wine) {
    state.imageCandidates = [];
    renderImageCandidates();
    updateWineNameMeta();
    return;
  }

  el.wineType.value = wine.type || el.wineType.value || "Red";
  el.wineProducer.value = wine.producer || "";
  el.wineVintage.value = wine.vintage || "";
  el.wineVarietal.value = wine.varietal || "";
  el.wineRegion.value = wine.region || "";
  el.wineSubRegion.value = wine.subRegion || "";
  el.winePrice.value = wine.averagePrice || "";
  el.wineImage.value = isUsableImageUrl(wine.image || "") ? wine.image : "";
  state.imageCandidates = [];
  syncImagePreview();
  renderImageCandidates();
  syncReviewEditor();
  populateReviewInputs();
}

function updateWineNameMeta() {
  const name = el.wineName.value.trim();
  if (!name) {
    el.wineNameMeta.textContent = "기존 와인을 고르면 관련 정보와 리뷰 수를 바로 채워옵니다.";
    return;
  }

  const wine = state.wines.find((item) => item.name.toLowerCase() === name.toLowerCase());
  if (!wine) {
    el.wineNameMeta.textContent = "새 와인으로 입력 중입니다. 필요한 값만 보정해서 바로 저장하면 됩니다.";
    return;
  }

  const metaParts = [
    wine.producer ? `생산자 ${wine.producer}` : "",
    formatRegionPath(wine.region, wine.subRegion) ? `산지 ${formatRegionPath(wine.region, wine.subRegion)}` : ""
  ].filter(Boolean);

  el.wineNameMeta.textContent = `${wine.reviews.length}개 리뷰가 쌓인 기존 와인입니다.${metaParts.length ? ` ${metaParts.join(" · ")}.` : ""}`;
}

function findBestWineFromText(normalizedText) {
  let bestWine = null;
  let bestScore = 0;

  state.wines.forEach((wine) => {
    let score = 0;
    const normalizedName = normalizeLookupValue(wine.name);
    const normalizedProducer = normalizeLookupValue(wine.producer || "");
    const normalizedVarietal = normalizeLookupValue(wine.varietal || "");
    const normalizedRegion = normalizeLookupValue(formatRegionPath(wine.region, wine.subRegion));
    const normalizedVintage = normalizeLookupValue(wine.vintage || "");
    const nameTokens = splitLookupTokens(wine.name);
    const producerTokens = splitLookupTokens(wine.producer || "");

    if (normalizedName && normalizedText.includes(normalizedName)) {
      score += 8;
    }
    if (normalizedProducer && normalizedText.includes(normalizedProducer)) {
      score += 6;
    }
    if (normalizedVintage && normalizedText.includes(normalizedVintage)) {
      score += 3;
    }
    if (normalizedVarietal && normalizedText.includes(normalizedVarietal)) {
      score += 2;
    }
    if (normalizedRegion && normalizedText.includes(normalizedRegion)) {
      score += 2;
    }
    score += countTokenMatches(normalizedText, nameTokens) * 1.2;
    score += countTokenMatches(normalizedText, producerTokens) * 1.1;
    if (wine.vintage && normalizedText.includes(String(wine.vintage))) {
      score += 3;
    }

    if (score > bestScore) {
      bestScore = score;
      bestWine = wine;
    }
  });

  return bestScore >= 6 ? bestWine : null;
}

function getAllKnownVarietals() {
  return [...new Set(Object.values(VARIETAL_OPTIONS).flat().concat(Object.values(state.customVarietals || {}).flatMap((value) => Array.isArray(value) ? value : [])))];
}

function getAllKnownRegions() {
  return [...new Set(state.wines.map((wine) => formatRegionPath(wine.region, wine.subRegion)).filter(Boolean))];
}

function getAllKnownProducers() {
  return [...new Set(state.wines.map((wine) => wine.producer).filter(Boolean))];
}

function detectBestKeywordMatch(normalizedText, candidates) {
  const ranked = (candidates || [])
    .filter(Boolean)
    .map((value) => ({ value, normalized: normalizeLookupValue(value) }))
    .map((entry) => ({
      ...entry,
      score: normalizedText.includes(entry.normalized)
        ? entry.normalized.length + 4
        : countTokenMatches(normalizedText, splitLookupTokens(entry.value))
    }))
    .filter((entry) => entry.normalized && entry.score > 0)
    .sort((left, right) => right.score - left.score || right.normalized.length - left.normalized.length);
  return ranked[0]?.value || "";
}

function inferWineType({ normalizedText, varietal, region }) {
  const varietalType = Object.entries(VARIETAL_OPTIONS).find(([, values]) => values.includes(varietal || ""))?.[0];
  if (varietalType) {
    return varietalType;
  }
  if (/(champagne|cava|cremant|prosecco|franciacorta|sparkling)/.test(normalizedText)) {
    return "Sparkling";
  }
  if (/(rose|rosato|rosado)/.test(normalizedText)) {
    return "Rose";
  }
  if (/(orange wine|skin contact|ramato)/.test(normalizedText)) {
    return "Orange";
  }
  if (/(sauternes|chablis|mosel|sancerre|riesling|chardonnay|chenin|sauvignonblanc)/.test(normalizedText)) {
    return "White";
  }
  if (/(barolo|barbaresco|burgundy|bourgogne|rioja|priorat|bordeaux|pinotnoir|cabernetsauvignon|merlot|syrah)/.test(normalizedText)) {
    return "Red";
  }
  if (region && /(champagne|cava|franciacorta)/i.test(region)) {
    return "Sparkling";
  }
  return el.wineType.value || "Red";
}

function deriveWineName(lines, producer, vintage) {
  const cleaned = lines
    .map((line) => line.replace(/\b(19|20)\d{2}\b/g, "").trim())
    .filter(Boolean);
  if (!cleaned.length) {
    return "";
  }
  const producerNormalized = normalizeLookupValue(producer || "");
  const candidates = cleaned.filter((line) => normalizeLookupValue(line) !== producerNormalized);
  const joined = candidates.slice(0, 2).join(" ");
  return joined || cleaned[0] || vintage || "";
}

function splitLookupTokens(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((token) => token && token.length > 2);
}

function countTokenMatches(normalizedText, tokens) {
  return (tokens || []).reduce((count, token) => count + (normalizedText.includes(token) ? 1 : 0), 0);
}

function normalizeLookupValue(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function persistCustomVarietalFromInput() {
  const type = el.wineType.value || "Red";
  const value = el.wineVarietal.value.trim();
  if (!value) {
    return;
  }

  const existing = getVarietalOptions(type);
  const normalized = normalizeAromaLabel(value);
  const matched = existing.find((item) => normalizeAromaLabel(item) === normalized)
    || existing.find((item) => normalizeAromaLabel(item).includes(normalized) || normalized.includes(normalizeAromaLabel(item)));

  if (matched) {
    el.wineVarietal.value = matched;
    return;
  }

  if (!Array.isArray(state.customVarietals[type])) {
    state.customVarietals[type] = [];
  }
  state.customVarietals[type].push(value);
  state.customVarietals[type] = [...new Set(state.customVarietals[type])].sort((a, b) => a.localeCompare(b));
  saveLocal();
  populateReviewInputs();
}

function renderAll() {
  renderFilters();
  renderPersonas();
  renderWines();
  renderRecentReviews();
  updateMetrics();
  updateAdminAccess();
  syncImagePreview();
}

function renderFilters() {
  renderFilterGroup(el.personaFilters, "all", "\uC804\uCCB4 Persona", state.selectedPersona, (value) => {
    state.selectedPersona = value;
    renderAll();
  });

  renderFilterGroup(el.reviewerFilters, "all", "\uBAA8\uB4E0 \uB9AC\uBDF0\uC5B4", state.selectedPersona, (value) => {
    state.selectedPersona = value;
    renderAll();
  });

  state.personas.forEach((persona) => {
    appendChip(el.personaFilters, persona.name, state.selectedPersona === persona.id, () => {
      state.selectedPersona = persona.id;
      renderAll();
    });
    appendChip(el.reviewerFilters, persona.name, state.selectedPersona === persona.id, () => {
      state.selectedPersona = persona.id;
      renderAll();
    });
  });

  el.typeFilters.innerHTML = "";
  ["All", "Red", "White", "Sparkling", "Rose", "Orange"].forEach((type) => appendChip(el.typeFilters, type, state.selectedType === type, () => {
    state.selectedType = type;
    renderWines();
  }));
}

function renderFilterGroup(container, value, label, activeValue, onClick) {
  container.innerHTML = "";
  appendChip(container, label, activeValue === value, () => onClick(value));
}

function appendChip(container, label, active, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `chip${active ? " active" : ""}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  container.appendChild(button);
}
function renderPersonas() {
  const personas = state.selectedPersona === "all"
    ? state.personas
    : state.personas.filter((persona) => persona.id === state.selectedPersona);
  el.personaGrid.classList.toggle("persona-grid-summary", state.selectedPersona === "all");

  el.personaGrid.innerHTML = personas.length
    ? personas.map(renderPersonaCard).join("")
    : '<div class="empty-state-rich"><strong>\uC544\uC9C1 \uAEBC\uB0B4 \uBCFC \uD398\uB974\uC18C\uB098\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4</strong><span>\uC544\uB798 Persona Studio\uC5D0\uC11C \uC774\uB984, \uD55C \uC904 \uC18C\uAC1C, \uCD5C\uC560 \uD488\uC885\uACFC \uCDE8\uD5A5 \uCD95\uC744 \uBA3C\uC800 \uC785\uB825\uD574 \uBCF4\uC138\uC694. \uCCAB \uD398\uB974\uC18C\uB098\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uBA74 \uC774 \uBCF4\uB4DC\uAC00 \uBC14\uB85C \uCC44\uC6CC\uC9D1\uB2C8\uB2E4.</span><a class="review-action" href="#personaStudio">\uD398\uB974\uC18C\uB098 \uB9CC\uB4E4\uAE30</a></div>';
  attachTasteTabs();
  attachPersonaActions();
}

function renderPersonaCard(persona) {
  const summary = buildPersonaSummaryLines(persona);
  const insights = getPersonaReviewInsights(persona.id);
  const compactView = state.selectedPersona === "all";
  if (compactView) {
    return renderCompactPersonaCard(persona, summary, insights);
  }
  return `<article class="persona-card ${compactView ? "persona-card-compact" : ""}">
    <div class="persona-header">
      <div class="persona-top">
        <div class="avatar">${persona.name.slice(0, 2).toUpperCase()}</div>
        <div class="persona-copy">
          <strong>${persona.name}</strong>
          <div class="muted">${summary.headline}</div>
        </div>
      </div>
    </div>
    <div class="persona-favorite-grid persona-favorite-grid-clean">
      <div class="persona-favorite-block">
        <span class="persona-character-label">\uB808\uB4DC \uCD5C\uC560 \uD488\uC885</span>
        <div class="taste-summary persona-favorites">${renderFavoritePills(persona.tastes.red, "\uC544\uC9C1 \uC785\uB825 \uC804")}</div>
      </div>
      <div class="persona-favorite-block">
        <span class="persona-character-label">\uD654\uC774\uD2B8 \uCD5C\uC560 \uD488\uC885</span>
        <div class="taste-summary persona-favorites">${renderFavoritePills(persona.tastes.white, "\uC544\uC9C1 \uC785\uB825 \uC804")}</div>
      </div>
    </div>
    ${compactView ? "" : `<div class="persona-character-grid">
      <div class="persona-character-block">
        <span class="persona-character-label">\uB808\uB4DC \uCE90\uB9AD\uD130</span>
        <p>${summary.red}</p>
      </div>
      <div class="persona-character-block">
        <span class="persona-character-label">\uD654\uC774\uD2B8 \uCE90\uB9AD\uD130</span>
        <p>${summary.white}</p>
      </div>
    </div>`}
    <div class="taste-tabs">
      <button type="button" class="tab-button active" data-tab="${persona.id}-red">\uB808\uB4DC</button>
      <button type="button" class="tab-button" data-tab="${persona.id}-white">\uD654\uC774\uD2B8</button>
    </div>
    <div class="taste-panel active" id="${persona.id}-red">
      <div class="persona-character-label">\uB808\uB4DC \uCDE8\uD5A5 \uB9F5</div>
      ${renderTasteTracks(persona.tastes.red, "red")}
    </div>
    <div class="taste-panel" id="${persona.id}-white">
      <div class="persona-character-label">\uD654\uC774\uD2B8 \uCDE8\uD5A5 \uB9F5</div>
      ${renderTasteTracks(persona.tastes.white, "white")}
    </div>
    <div class="persona-review-shell">
      <div class="persona-review-summary">
        <div class="persona-review-stat hero">
          <span>&#xD3C9;&#xADE0; &#xC810;&#xC218;</span>
          <strong>${insights.averageLabel}</strong>
          <div class="persona-review-meta-line">
            <span>&#xB9AC;&#xBDF0; ${insights.reviewCount}&#xAC1C;</span>
            <span>&#xCD5C;&#xACE0; ${insights.topScoreLabel}</span>
            <span>&#xCD5C;&#xADFC; ${insights.latestLabel}</span>
          </div>
        </div>
      </div>
      <div class="persona-review-grid">
        <div class="persona-review-panel">
          <span class="persona-character-label">\uC0C1\uC704 5\uAC1C \uC640\uC778</span>
          ${renderPersonaReviewLinks(insights.topReviews, "\uC544\uC9C1 \uC810\uC218\uAC00 \uC788\uB294 \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.", true)}
        </div>
        <div class="persona-review-panel">
          <span class="persona-character-label">\uCD5C\uADFC \uB9AC\uBDF0</span>
          ${renderPersonaReviewLinks(insights.recentReviews, "\uC544\uC9C1 \uCD5C\uADFC \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")}
        </div>
      </div>
      <div class="button-row">
        <button type="button" class="review-action" data-action="focus-persona-reviews" data-persona-id="${persona.id}">${persona.name} \uB9AC\uBDF0\uB9CC \uBCF4\uAE30</button>
      </div>
    </div>
  </article>`;
}

function renderCompactPersonaCard(persona, summary, insights) {
  return `<details class="persona-card persona-summary-card">
    <summary class="persona-summary-row">
      <div class="persona-summary-identity">
        <div class="avatar">${persona.name.slice(0, 2).toUpperCase()}</div>
        <div class="persona-summary-copy">
          <strong>${persona.name}</strong>
          <div class="muted">${summary.headline}</div>
        </div>
      </div>
      <div class="persona-summary-tags">
        <span class="persona-summary-chip">Red ${formatPrimaryFavorite(persona.tastes.red)}</span>
        <span class="persona-summary-chip">White ${formatPrimaryFavorite(persona.tastes.white)}</span>
      </div>
      <div class="persona-summary-metrics">
        <div class="persona-summary-metric"><span>Avg</span><strong>${insights.averageLabel}</strong></div>
        <button type="button" class="persona-summary-metric action" data-action="focus-persona-reviews" data-persona-id="${persona.id}"><span>Reviews</span><strong>${insights.reviewCount}</strong></button>
        <button type="button" class="persona-summary-metric action" data-action="jump-to-review" data-persona-id="${persona.id}" data-wine-id="${insights.latestReview?.wineId || ""}" data-review-id="${insights.latestReview?.reviewId || ""}" ${insights.latestReview ? "" : "disabled"}><span>Latest</span><strong>${insights.latestReview?.wineName || "-"}</strong></button>
      </div>
    </summary>
    <div class="persona-summary-body">
      <div class="persona-character-grid">
        <div class="persona-character-block">
          <span class="persona-character-label">\uB808\uB4DC \uCE90\uB9AD\uD130</span>
          <p>${summary.red}</p>
        </div>
        <div class="persona-character-block">
          <span class="persona-character-label">\uD654\uC774\uD2B8 \uCE90\uB9AD\uD130</span>
          <p>${summary.white}</p>
        </div>
      </div>
      <div class="taste-tabs">
        <button type="button" class="tab-button active" data-tab="${persona.id}-red">\uB808\uB4DC</button>
        <button type="button" class="tab-button" data-tab="${persona.id}-white">\uD654\uC774\uD2B8</button>
      </div>
      <div class="taste-panel active" id="${persona.id}-red">
        <div class="persona-character-label">\uB808\uB4DC \uCDE8\uD5A5 \uB9F5</div>
        ${renderTasteTracks(persona.tastes.red, "red")}
      </div>
      <div class="taste-panel" id="${persona.id}-white">
        <div class="persona-character-label">\uD654\uC774\uD2B8 \uCDE8\uD5A5 \uB9F5</div>
        ${renderTasteTracks(persona.tastes.white, "white")}
      </div>
      <div class="persona-review-shell">
        <div class="persona-review-summary">
          <div class="persona-review-stat hero">
            <span>&#xD3C9;&#xADE0; &#xC810;&#xC218;</span>
            <strong>${insights.averageLabel}</strong>
            <div class="persona-review-meta-line">
              <span>&#xB9AC;&#xBDF0; ${insights.reviewCount}&#xAC1C;</span>
              <span>&#xCD5C;&#xACE0; ${insights.topScoreLabel}</span>
              <span>&#xCD5C;&#xADFC; ${insights.latestLabel}</span>
            </div>
          </div>
        </div>
        <div class="persona-review-grid">
          <div class="persona-review-panel">
            <span class="persona-character-label">\uC0C1\uC704 5\uAC1C \uC640\uC778</span>
            ${renderPersonaReviewLinks(insights.topReviews, "\uC544\uC9C1 \uC810\uC218\uAC00 \uC788\uB294 \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.", true)}
          </div>
          <div class="persona-review-panel">
            <span class="persona-character-label">\uCD5C\uADFC \uB9AC\uBDF0</span>
            ${renderPersonaReviewLinks(insights.recentReviews, "\uC544\uC9C1 \uCD5C\uADFC \uB9AC\uBDF0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")}
          </div>
        </div>
        <div class="button-row">
          <button type="button" class="review-action" data-action="focus-persona-reviews" data-persona-id="${persona.id}">${persona.name} \uB9AC\uBDF0\uB9CC \uBCF4\uAE30</button>
        </div>
      </div>
    </div>
  </details>`;
}

function renderFavoritePills(taste, emptyLabel = "&#xC544;&#xC9C1; &#xC785;&#xB825; &#xC804;") {
  const items = (taste.favoritePairs || [])
    .map((pair) => [pair?.varietal, pair?.region].filter(Boolean).join(" - "))
    .filter(Boolean);
  return items.length ? items.map((item) => `<span class="pill">${item}</span>`).join("") : `<span class="pill">${emptyLabel}</span>`;
}

function formatPrimaryFavorite(taste) {
  const first = normalizeTaste(taste || {}).favoritePairs?.[0] || {};
  const parts = [first.varietal, first.region].filter(Boolean);
  return parts.length ? parts.join(" - ") : "Not set";
}

function renderPersonaReviewLinks(items, emptyMessage, ranked = false) {
  if (!items.length) {
    return `<div class="empty-state compact">${emptyMessage}</div>`;
  }
  return `<div class="persona-review-list">${items.map((item, index) => `
    <button type="button" class="persona-review-link" data-action="jump-to-review" data-persona-id="${item.personaId}" data-wine-id="${item.wineId}" data-review-id="${item.reviewId}">
      ${ranked ? `<span class="persona-rank-badge">#${index + 1}</span>` : ""}
      <strong>${item.wineName}</strong>
      <span>${item.scoreLabel}${item.createdAt ? ` / ${item.createdAt}` : ""}</span>
    </button>
  `).join("")}</div>`;
}

function renderTasteTracks(taste, mode) {
  return getFieldLabels(mode).map((field) => `<div class="taste-track minimal"><div class="taste-axis-head"><strong>${field.label}</strong></div><div class="taste-scale">${renderSegments(taste[field.key])}</div><div class="taste-poles"><span>${field.left}</span><span>${field.right}</span></div></div>`).join("");
}

function renderSegments(activeCount) {
  return `<div class="taste-meter"><div class="taste-line"></div><span class="taste-marker" style="left:${scalePosition(activeCount)}%"></span></div>`;
}

function attachTasteTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.dataset.tab;
      const card = button.closest(".persona-card");
      card.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
      card.querySelectorAll(".taste-panel").forEach((panel) => panel.classList.remove("active"));
      button.classList.add("active");
      card.querySelector(`#${panelId}`).classList.add("active");
    });
  });
}

function attachPersonaActions() {
  document.querySelectorAll("[data-action='focus-persona-reviews']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      state.selectedPersona = button.dataset.personaId;
      state.selectedType = "All";
      renderAll();
      document.getElementById("library")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-action='jump-to-review']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!button.dataset.wineId || !button.dataset.reviewId) {
        return;
      }
      state.selectedPersona = button.dataset.personaId;
      state.selectedType = "All";
      renderAll();
      const targetId = `review-${button.dataset.wineId}-${button.dataset.reviewId}`;
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });
  });
}

function getFieldLabels(mode) {
  if (mode === "white") {
    return [
      { key: "fruitDriven", label: "Fruitiness", left: "Fruit-Driven", right: "Mineral / Linear" },
      { key: "oak", label: "Oak", left: "New Oak", right: "Neutral Oak" },
      { key: "acidity", label: "Acidity", left: "High", right: "Low" },
      { key: "body", label: "Body", left: "Rich", right: "Lean" },
      { key: "fruitProfile", label: "Fruit Profile", left: "Tropical Fruit", right: "Citrus" }
    ];
  }
  return TASTE_FIELDS;
}

function filteredWines() {
  return state.wines.filter((wine) => {
    const matchesType = state.selectedType === "All" || wine.type === state.selectedType;
    const matchesPersona = state.selectedPersona === "all" || wine.reviews.some((review) => review.personaId === state.selectedPersona);
    const haystack = [
      wine.name,
      wine.varietal,
      wine.region,
      wine.subRegion,
      ...wine.reviews.map((review) => [
        review.personaId,
        review.summary,
        ...review.primaryAromas,
        ...review.secondaryAromas,
        ...review.tertiaryAromas
      ].join(" "))
    ].join(" ").toLowerCase();
    const matchesQuery = !state.query || haystack.includes(state.query);
    return matchesType && matchesPersona && matchesQuery;
  });
}

function renderWines() {
  const wines = filteredWines();
  if (!wines.length) {
    el.wineGrid.innerHTML = '<div class="empty-state-rich"><strong>아직 조건에 맞는 와인이 없습니다</strong><span>검색어나 리뷰어 필터를 조금 풀어 보거나, 아래 Review Studio에서 새 리뷰를 먼저 한 병 추가해 보세요.</span><a class="review-action" href="#reviewStudio">리뷰 쓰러 가기</a></div>';
    return;
  }

  el.wineGrid.innerHTML = wines.map((wine) => renderWineCard(wine)).join("");
  attachReviewActions();
}

function renderWineCard(wine) {
  const visibleReviews = wine.reviews.filter((review) => state.selectedPersona === "all" || review.personaId === state.selectedPersona);
  const reviewMarkup = visibleReviews.map((review) => renderReviewSnippet(wine, review)).join("");
  const typeClass = `type-${String(wine.type || "red").toLowerCase()}`;
  const varietalLabel = wine.varietal || "\ud488\uc885 \ubbf8\uc785\ub825";
  const regionLabel = formatRegionPath(wine.region, wine.subRegion) || "\uc0b0\uc9c0 \ubbf8\uc785\ub825";
  const priceLine = wine.averagePrice
    ? `Wine-Searcher / Manual &#xAC00;&#xACA9; &#xBA54;&#xBAA8;: ${wine.averagePrice}`
    : "&#xC544;&#xC9C1; &#xD3C9;&#xADE0;&#xAC00; &#xBA54;&#xBAA8;&#xAC00; &#xC5C6;&#xC2B5;&#xB2C8;&#xB2E4;.";
  const wineActions = `<div class="button-row wine-card-actions"><button type="button" class="review-action" data-action="write-review-for-wine" data-wine-id="${wine.id}">&#xC774; &#xC640;&#xC778;&#xC5D0; &#xB9AC;&#xBDF0; &#xC4F0;&#xAE30;</button></div>`;
  const wineAdminAction = state.isAdmin ? `<button type="button" class="review-action danger icon-action" data-action="delete-wine" data-wine-id="${wine.id}" title="등록된 와인 삭제" aria-label="등록된 와인 삭제">&#x1F5D1;</button>` : "";
  const reviewShell = visibleReviews.length
    ? `<div class="review-stack-title"><strong>&#xB9AC;&#xBDF0; &amp; &#xB313;&#xAE00;</strong><span>${visibleReviews.length}개 리뷰</span></div>${reviewMarkup}`
    : `<div class="review-empty review-empty-rich"><strong>&#xC544;&#xC9C1; &#xCCAB; &#xB9AC;&#xBDF0;&#xAC00; &#xC5C6;&#xC2B5;&#xB2C8;&#xB2E4;</strong><span>&#xC774; &#xC640;&#xC778;&#xC758; &#xCCAB; &#xC778;&#xC0C1;&#xC744; &#xB0A8;&#xAE30;&#xBA74; &#xB2E4;&#xC74C; &#xC0AC;&#xB78C;&#xC774; &#xBE60;&#xB974;&#xAC8C; &#xCC38;&#xACE0;&#xD560; &#xC218; &#xC788;&#xC2B5;&#xB2C8;&#xB2E4;.</span><button type="button" class="review-action" data-action="write-review-for-wine" data-wine-id="${wine.id}">&#xCCAB; &#xB9AC;&#xBDF0; &#xC4F0;&#xAE30;</button></div>`;

  return `<article class="wine-card ${typeClass}" id="wine-${wine.id}">
    <div class="wine-card-inner">
      <div class="wine-image-wrap"><img class="wine-image" src="${wine.image || makePlaceholderImage(wine.name, "#8a3650", "#f5d2c6")}" alt="${wine.name} &#xC774;&#xBBF8;&#xC9C0;"></div>
      <div class="wine-card-top">
        <div class="wine-card-copy"><h3>${wine.name}</h3><div class="muted">${[wine.producer, wine.vintage].filter(Boolean).join(" / ")}</div></div>
      <div class="wine-meta-pills"><span class="pill">${varietalLabel}</span><span class="pill">${regionLabel}</span><span class="pill">${wine.reviews.length}개 리뷰</span></div>
        <div class="wine-card-head-actions"><span class="type-badge ${typeClass}">${wine.type}</span>${wineAdminAction}</div>
      </div>
      <div class="wine-meta-pills"><span class="pill">${varietalLabel}</span><span class="pill">${regionLabel}</span><span class="pill">${wine.reviews.length}\uac1c \ub9ac\ubdf0</span></div>
      <div class="muted">${priceLine}</div>
      <div class="wine-card-footer">
        ${wineActions}
        ${reviewShell}
      </div>
    </div>
  </article>`;
}

function renderReviewSnippet(wine, review) {
  const persona = state.personas.find((item) => item.id === review.personaId);
  const actionButtons = state.isAdmin
    ? `<div class="review-actions"><button type="button" class="review-action" data-action="edit-review" data-wine-id="${wine.id}" data-review-id="${review.id}">&#xC218;&#xC815;</button><button type="button" class="review-action danger" data-action="delete-review" data-wine-id="${wine.id}" data-review-id="${review.id}">&#xC0AD;&#xC81C;</button></div>`
    : "";

  const structureMarkup = renderReviewStructureSnapshot(review, wine.type);
  const aromaMarkup = renderAromaSummary(review);
  const scoreMarkup = review.overallScore !== "" && review.overallScore !== null && review.overallScore !== undefined
    ? `<span class="score-pill">${review.overallScore} pts</span>`
    : "";
  const commentMarkup = renderCommentThread(wine, review);
  return `<div class="review-snippet" id="review-${wine.id}-${review.id}"><div class="row" style="align-items:flex-start"><div class="review-meta-stack"><strong>${persona ? persona.name : review.personaId}</strong><div class="review-meta">${review.createdAt}</div></div>${actionButtons}</div><div class="review-stack"><div class="review-score">${scoreMarkup}</div>${structureMarkup}${aromaMarkup}<div class="review-copy">${review.summary || review.note}</div>${commentMarkup}</div></div>`;
}

function renderCommentThread(wine, review) {
  const comments = (review.comments || []).map((comment) => `
    <div class="comment-item">
      <div class="row" style="align-items:center">
        <strong>${escapeHtml(comment.authorName)}</strong>
        <span class="review-meta">${comment.createdAt}</span>
      </div>
      <div>${escapeHtml(comment.body)}</div>
    </div>
  `).join("");

  const empty = '<div class="empty-state compact">&#xC544;&#xC9C1; &#xB313;&#xAE00;&#xC774; &#xC5C6;&#xC2B5;&#xB2C8;&#xB2E4;.</div>';
  return `
    <div class="comment-thread-card" style="margin-top:14px">
      <div class="row" style="align-items:center">
        <strong>&#xB9AC;&#xBDF0; &#xB313;&#xAE00;</strong>
        <span class="review-meta">${(review.comments || []).length} comments</span>
      </div>
      <div class="comment-list">${comments || empty}</div>
      <form class="comment-form" data-review-id="${review.id}" data-wine-id="${wine.id}" style="display:grid;gap:10px;margin-top:12px">
        <div class="form-grid">
          <label>&#xC774;&#xB984;<input name="authorName" type="text" maxlength="40" placeholder="&#xC774;&#xB984; &#xB610;&#xB294; &#xB2C9;&#xB124;&#xC784;" required></label>
          <label style="grid-column:span 1 / auto">&#xB313;&#xAE00;<input name="body" type="text" maxlength="240" placeholder="&#xC774; &#xB9AC;&#xBDF0;&#xC5D0; &#xB300;&#xD55C; &#xC9E7;&#xC740; &#xCF54;&#xBA58;&#xD2B8;&#xB97C; &#xB0A8;&#xAE30;&#xC138;&#xC694;" required></label>
        </div>
        <div class="button-row">
          <button type="submit" class="review-action">&#xB313;&#xAE00; &#xB0A8;&#xAE30;&#xAE30;</button>
        </div>
      </form>
    </div>
  `;
}

function getPersonaReviewInsights(personaId) {
  const reviews = state.wines.flatMap((wine) => wine.reviews
    .filter((review) => review.personaId === personaId)
    .map((review) => ({
      personaId,
      wineId: wine.id,
      wineName: wine.name,
      reviewId: review.id,
      score: Number(review.overallScore),
      scoreLabel: Number.isFinite(Number(review.overallScore)) ? `${Number(review.overallScore)} pts` : "&#xC810;&#xC218; &#xC5C6;&#xC74C;",
      createdAt: review.createdAt || ""
    })));

  const scoredReviews = reviews.filter((review) => Number.isFinite(review.score));
  const average = scoredReviews.length
    ? scoredReviews.reduce((sum, review) => sum + review.score, 0) / scoredReviews.length
    : null;
  const topReviews = [...scoredReviews]
    .sort((a, b) => (b.score - a.score) || String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 5);
  const recentReviews = [...reviews]
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, 5);

  return {
    reviewCount: reviews.length,
    averageLabel: average === null ? "-" : average.toFixed(1),
    topScoreLabel: topReviews[0] ? `${topReviews[0].score} pts` : "-",
    latestLabel: recentReviews[0]?.createdAt || "-",
    latestReview: recentReviews[0] || null,
    topReviews,
    recentReviews
  };
}

function attachReviewActions() {
  document.querySelectorAll("[data-action='write-review-for-wine']").forEach((button) => {
    button.addEventListener("click", () => startReviewForWine(button.dataset.wineId));
  });

  document.querySelectorAll("[data-action='edit-review']").forEach((button) => {
    button.addEventListener("click", () => startReviewEdit(button.dataset.wineId, button.dataset.reviewId));
  });

  document.querySelectorAll("[data-action='delete-review']").forEach((button) => {
    button.addEventListener("click", () => handleReviewDelete(button.dataset.wineId, button.dataset.reviewId));
  });

  document.querySelectorAll("[data-action='delete-wine']").forEach((button) => {
    button.addEventListener("click", () => handleWineDelete(button.dataset.wineId));
  });

  document.querySelectorAll(".comment-form").forEach((form) => {
    form.addEventListener("submit", handleCommentSubmit);
  });
}

function renderRecentReviews() {
  if (!el.recentGrid) {
    return;
  }
  const reviews = state.wines
    .flatMap((wine) => wine.reviews.map((review) => ({ ...review, wineName: wine.name, wineType: wine.type })))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  el.recentGrid.innerHTML = reviews.length
    ? reviews.map((review) => {
      const persona = state.personas.find((item) => item.id === review.personaId);
      return `<article class="review-card"><strong>${persona ? persona.name : review.personaId} on ${review.wineName}</strong><div class="review-meta">${review.createdAt} / ${review.wineType}${review.overallScore !== "" && review.overallScore !== null && review.overallScore !== undefined ? ` / ${review.overallScore} pts` : ""}</div><div>${review.summary || review.note}</div></article>`;
    }).join("")
    : '<div class="empty-state">&#xC544;&#xC9C1; &#xB9AC;&#xBDF0;&#xAC00; &#xC5C6;&#xC2B5;&#xB2C8;&#xB2E4;.</div>';
}

function renderReviewStructureSnapshot(review, type) {
  const fields = getStructureFields(type);
  const groups = getStructureGroups(type);
  return `<div class="review-section-shell"><div class="review-stack-title"><strong>&#xAD6C;&#xC870; &#xD3C9;&#xAC00;</strong><span>${fields.length}개 축</span></div><div class="structure-detail-grid">${groups.map((group) => renderStructureFieldGroup(group, review.structure || {})).join("")}</div></div>`;
}

function renderStructureFieldGroup(group, structure) {
  const isSingle = group.length === 1;
  return `<div class="structure-pair-row${isSingle ? " single" : ""}">${group.map((field) => renderStructureFieldSnapshot(field, structure?.[field.key] || 4)).join("")}</div>`;
}

function renderStructureFieldSnapshot(field, rawValue) {
  const displayedValue = getDisplayedScaleValue(rawValue, field.reverse);
  return `<div class="review-detail-block structure-detail-block"><div class="structure-detail-head"><h4>${field.label}</h4><span class="structure-badge">${describeStructurePosition(field, rawValue)}</span></div><div class="taste-scale compact">${renderSegments(displayedValue)}</div><div class="taste-poles compact"><span>${field.left}</span><span>${field.right}</span></div></div>`;
}

function describeStructurePosition(field, rawValue) {
  const value = getDisplayedScaleValue(rawValue, field.reverse);
  if (value <= 2) {
    return field.left;
  }
  if (value >= 6) {
    return field.right;
  }
  if (value === 4) {
    return "Balanced";
  }
  return value < 4 ? `Leaning ${field.left}` : `Leaning ${field.right}`;
}

function renderAromaSummary(review) {
  const groups = [
    { label: "Primary", values: review.primaryAromas },
    { label: "Secondary", values: review.secondaryAromas },
    { label: "Tertiary", values: review.tertiaryAromas }
  ].filter((group) => group.values?.length);

  if (!groups.length) {
    return "";
  }

  return `<div class="review-section-shell"><div class="review-stack-title"><strong>&#xD5A5;&#xBBF8; &#xD504;&#xB85C;&#xD30C;&#xC77C;</strong><span>${groups.length}개 레이어</span></div><div class="review-detail-grid">${groups.map((group) => `<div class="review-detail-block aroma-detail-block"><h4>${translateAromaLayerLabel(group.label)}</h4><div class="selected-aromas">${group.values.map((value) => `<span class="pill">${value}</span>`).join("")}</div></div>`).join("")}</div></div>`;
}

function translateAromaLayerLabel(label) {
  if (label === "Primary") return "1차 향";
  if (label === "Secondary") return "2차 향";
  if (label === "Tertiary") return "3차 향";
  return label;
}

function updateMetrics() {
  const reviewCount = state.wines.reduce((sum, wine) => sum + wine.reviews.length, 0);
  const regionCount = new Set(state.wines.map((wine) => formatRegionPath(wine.region, wine.subRegion)).filter(Boolean)).size;
  el.personaCount.textContent = String(state.personas.length);
  el.wineCount.textContent = String(state.wines.length);
  el.reviewCount.textContent = String(reviewCount);
  el.regionCount.textContent = String(regionCount);
}

function updateStorageStatus() {
  if (!el.storageStatus || !el.storageNote) {
    return;
  }
  if (state.supabase) {
    el.storageStatus.textContent = "Supabase Connected";
    el.storageNote.innerHTML = state.isAdmin
      ? "&#xAD00;&#xB9AC;&#xC790; &#xB85C;&#xADF8;&#xC778; &#xC0C1;&#xD0DC;&#xC785;&#xB2C8;&#xB2E4;. &#xB9AC;&#xBDF0; &#xC0DD;&#xC131;, &#xC218;&#xC815;, &#xC0AD;&#xC81C;&#xC640; taste &#xC800;&#xC7A5;&#xC774; DB&#xC5D0; &#xBC18;&#xC601;&#xB429;&#xB2C8;&#xB2E4;."
      : "&#xACF5;&#xAC1C; &#xC77D;&#xAE30; &#xBAA8;&#xB4DC;&#xC785;&#xB2C8;&#xB2E4;. &#xAD00;&#xB9AC;&#xC790; &#xB85C;&#xADF8;&#xC778; &#xD6C4; &#xC218;&#xC815; &#xAD8C;&#xD55C;&#xC774; &#xC5F4;&#xB9BD;&#xB2C8;&#xB2E4;.";
  } else {
    el.storageStatus.textContent = "Local Mode";
    el.storageNote.innerHTML = (window.VVR_SUPABASE_URL && window.VVR_SUPABASE_ANON_KEY)
      ? "Supabase &#xC124;&#xC815;&#xC740; &#xC788;&#xC9C0;&#xB9CC; auth client &#xB85C;&#xB4DC;&#xAC00; &#xC2E4;&#xD328;&#xD574; localStorage fallback&#xC73C;&#xB85C; &#xB3D9;&#xC791;&#xC911;&#xC785;&#xB2C8;&#xB2E4;."
      : "Supabase &#xC124;&#xC815; &#xC804;&#xC5D0;&#xB294; localStorage fallback&#xC73C;&#xB85C; &#xB3D9;&#xC791;&#xD569;&#xB2C8;&#xB2E4;.";
  }
}

function updateAuthUi() {
  if (!state.supabase) {
    el.authBadge.textContent = "Local Prototype";
    el.authStatus.innerHTML = "Supabase Auth&#xB97C; &#xC5F0;&#xACB0;&#xD558;&#xBA74; &#xC2E4;&#xC81C; &#xAD00;&#xB9AC;&#xC790; &#xB85C;&#xADF8;&#xC778;&#xC744; &#xC0AC;&#xC6A9;&#xD560; &#xC218; &#xC788;&#xC2B5;&#xB2C8;&#xB2E4;.";
    el.authHelp.innerHTML = "&#xD604;&#xC7AC;&#xB294; &#xB85C;&#xCEEC; &#xD504;&#xB85C;&#xD1A0;&#xD0C0;&#xC785; &#xBAA8;&#xB4DC;&#xC785;&#xB2C8;&#xB2E4;.";
    el.logoutButton.hidden = true;
    el.loginButton.disabled = true;
    el.signupButton.disabled = true;
    el.passwordResetButton.disabled = true;
    updatePasswordRecoveryUi();
    updateStorageStatus();
    return;
  }

  const email = state.session?.user?.email || "";
  el.loginButton.disabled = false;
  el.signupButton.disabled = false;
  el.passwordResetButton.disabled = false;

  if (state.isAdmin) {
    el.authBadge.textContent = "Admin Verified";
    el.authStatus.innerHTML = `${email} &#xACC4;&#xC815;&#xC73C;&#xB85C; &#xB85C;&#xADF8;&#xC778;&#xB428;`;
    el.authHelp.innerHTML = "&#xC774;&#xBA54;&#xC77C; &#xAE30;&#xBC18; &#xAD00;&#xB9AC;&#xC790; &#xC778;&#xC99D;&#xC774; &#xD1B5;&#xACFC;&#xB418;&#xC5B4; &#xB9AC;&#xBDF0; &#xC218;&#xC815;/&#xC0AD;&#xC81C;&#xC640; taste &#xC800;&#xC7A5;&#xC774; &#xAC00;&#xB2A5;&#xD569;&#xB2C8;&#xB2E4;.";
    el.logoutButton.hidden = false;
  } else if (state.session) {
    el.authBadge.textContent = state.recoveryMode ? "Password Recovery" : "Viewer Session";
    el.authStatus.innerHTML = state.recoveryMode
      ? "재설정 링크가 확인되었습니다. 아래에서 새 비밀번호를 저장해 주세요."
      : `${email} &#xACC4;&#xC815;&#xC73C;&#xB85C; &#xB85C;&#xADF8;&#xC778;&#xB428;`;
    el.authHelp.innerHTML = state.recoveryMode
      ? "새 비밀번호를 저장한 뒤 같은 이메일로 다시 로그인하면 됩니다."
      : "&#xD604;&#xC7AC; &#xACC4;&#xC815;&#xC740; &#xAD00;&#xB9AC;&#xC790; &#xD5C8;&#xC6A9; &#xBAA9;&#xB85D;&#xC5D0; &#xC5C6;&#xC5B4; &#xC77D;&#xAE30; &#xC804;&#xC6A9;&#xC785;&#xB2C8;&#xB2E4;.";
    el.logoutButton.hidden = false;
  } else {
    el.authBadge.textContent = "Admin Locked";
    el.authStatus.innerHTML = state.recoveryError
      ? `재설정 링크를 처리하지 못했습니다: ${escapeHtml(state.recoveryError)}`
      : "&#xC544;&#xC9C1; &#xB85C;&#xADF8;&#xC778;&#xB418;&#xC9C0; &#xC54A;&#xC558;&#xC2B5;&#xB2C8;&#xB2E4;.";
    el.authHelp.innerHTML = `&#xAD00;&#xB9AC;&#xC790; &#xC774;&#xBA54;&#xC77C;(${ADMIN_EMAILS.join(", ")})&#xB85C; &#xB85C;&#xADF8;&#xC778;&#xD558;&#xBA74; &#xD3B8;&#xC9D1; &#xAD8C;&#xD55C;&#xC774; &#xC5F4;&#xB9BD;&#xB2C8;&#xB2E4;.`;
    el.logoutButton.hidden = true;
  }

  updatePasswordRecoveryUi();
  updateStorageStatus();
}

function updatePasswordRecoveryUi() {
  if (!el.passwordRecoveryPanel) {
    return;
  }

  el.passwordRecoveryPanel.hidden = !state.recoveryMode;
  if (state.recoveryMode) {
    el.passwordRecoveryHelp.textContent = "재설정 링크가 확인되었습니다. 아래에서 새 비밀번호를 입력하고 바로 저장하세요.";
  } else if (state.recoveryError) {
    el.passwordRecoveryHelp.textContent = `재설정 링크를 처리하지 못했습니다: ${state.recoveryError}`;
  } else {
    el.passwordRecoveryHelp.textContent = "재설정 링크로 들어오면 여기서 새 비밀번호를 바로 저장할 수 있습니다.";
  }
}
function updateAdminAccess() {
  const disabled = !state.isAdmin;
  const reviewSubmitButton = el.reviewSubmitLabel;
  const tasteSubmitButton = el.tasteForm?.querySelector('button[type="submit"]');

  if (reviewSubmitButton) {
    reviewSubmitButton.disabled = disabled;
  }
  if (tasteSubmitButton) {
    tasteSubmitButton.disabled = disabled;
  }

  if (el.fetchImageCandidates) {
    el.fetchImageCandidates.disabled = false;
  }
  if (el.fetchPriceData) {
    el.fetchPriceData.disabled = false;
  }
  if (el.cancelEditButton) {
    el.cancelEditButton.disabled = disabled;
  }
  if (el.deletePersonaButton) {
    el.deletePersonaButton.disabled = disabled || el.tastePersona.value === "__new__" || !state.personas.length;
  }
}

function syncTasteEditor() {
  const persona = getSelectedPersonaData();
  const mode = el.tasteMode.value;
  const taste = persona.tastes[mode];
  el.personaNameInput.value = persona.name || "";
  el.personaSummaryInput.value = persona.summary || "";
  el.favVarietyOne.value = taste.favoritePairs?.[0]?.varietal || "";
  el.favRegionOne.value = taste.favoritePairs?.[0]?.region || "";
  el.favVarietyTwo.value = taste.favoritePairs?.[1]?.varietal || "";
  el.favRegionTwo.value = taste.favoritePairs?.[1]?.region || "";
  state.tasteDraft = {
    fruitDriven: taste.fruitDriven,
    oak: taste.oak,
    acidity: taste.acidity,
    body: taste.body,
    fruitProfile: taste.fruitProfile
  };
  const labels = getFieldLabels(mode);
  el.tasteEditor.innerHTML = labels.map((field) => `<div class="taste-track minimal editor"><div class="taste-axis-head"><strong>${field.label}</strong></div><div class="segment-picker" data-field="${field.key}"></div><div class="taste-poles"><span>${field.left}</span><span>${field.right}</span></div></div>`).join("");
  labels.forEach((field) => renderSegmentPicker(field.key));
}

function getSelectedPersonaData() {
  const selected = state.personas.find((item) => item.id === el.tastePersona.value);
  if (selected) {
    return {
      ...selected,
      tastes: {
        red: normalizeTaste(selected.tastes.red),
        white: normalizeTaste(selected.tastes.white)
      }
    };
  }

  return {
    id: "__new__",
    name: "",
    role: "",
    focus: "",
    summary: "",
    tastes: {
      red: createEmptyTaste(),
      white: createEmptyTaste()
    }
  };
}

function renderSegmentPicker(fieldKey) {
  const host = el.tasteEditor.querySelector(`[data-field="${fieldKey}"]`);
  if (!host) {
    return;
  }

  host.innerHTML = `<div class="taste-meter interactive"><div class="taste-line"></div><span class="taste-marker" style="left:${scalePosition(state.tasteDraft[fieldKey])}%"></span></div>`;
  for (let i = 1; i <= 7; i += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment-button${state.tasteDraft[fieldKey] === i ? " active" : ""}`;
    button.addEventListener("click", () => {
      state.tasteDraft[fieldKey] = i;
      renderSegmentPicker(fieldKey);
    });
    host.appendChild(button);
  }
}

function scalePosition(value) {
  return ((Math.max(1, Math.min(7, value)) - 1) / 6) * 100;
}

function syncReviewEditor() {
  const type = el.wineType.value || "Red";
  const typeKey = getReviewTypeKey(type);
  state.reviewDraft.structure = normalizeReviewStructure(state.reviewDraft.structure, typeKey);
  state.reviewDraft.primaryAromas = state.reviewDraft.primaryAromas.filter((item) => getAromaOptions("primary", type).includes(item));
  state.reviewDraft.secondaryAromas = state.reviewDraft.secondaryAromas.filter((item) => getAromaOptions("secondary", type).includes(item));
  state.reviewDraft.tertiaryAromas = state.reviewDraft.tertiaryAromas.filter((item) => getAromaOptions("tertiary", type).includes(item));
  renderReviewStructureEditor(type);
  renderAromaSelector("primary", type);
  renderAromaSelector("secondary", type);
  renderAromaSelector("tertiary", type);
}

function renderReviewStructureEditor(type) {
  const fields = getStructureFields(type);
  const groups = getStructureGroups(type);
  el.reviewStructureEditor.innerHTML = groups.map((group) => `
    <div class="structure-pair-row editor${group.length === 1 ? " single" : ""}">
      ${group.map((field) => `<div class="review-track structure-editor-track"><div class="taste-axis-head"><strong>${field.label}</strong></div><div class="segment-picker" data-review-field="${field.key}"></div><div class="taste-poles"><span>${field.left}</span><span>${field.right}</span></div></div>`).join("")}
    </div>
  `).join("");
  fields.forEach((field) => renderReviewSegmentPicker(field.key));
}

function renderReviewSegmentPicker(fieldKey) {
  const host = el.reviewStructureEditor.querySelector(`[data-review-field="${fieldKey}"]`);
  if (!host) {
    return;
  }

  const field = getStructureFields(el.wineType.value || "Red").find((item) => item.key === fieldKey);
  const isReversed = Boolean(field?.reverse);
  const displayedValue = getDisplayedScaleValue(state.reviewDraft.structure[fieldKey], isReversed);
  host.innerHTML = `<div class="taste-meter interactive"><div class="taste-line"></div><span class="taste-marker" style="left:${scalePosition(displayedValue)}%"></span></div>`;
  for (let displayIndex = 1; displayIndex <= 7; displayIndex += 1) {
    const storedValue = getStoredScaleValue(displayIndex, isReversed);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `segment-button${displayedValue === displayIndex ? " active" : ""}`;
    button.addEventListener("click", () => {
      state.reviewDraft.structure[fieldKey] = storedValue;
      renderReviewSegmentPicker(fieldKey);
    });
    host.appendChild(button);
  }
}

function renderAromaSelector(category, type) {
  const selector = el[`${category}AromaSelector`];
  const selectedHost = el[`${category}AromaSelected`];
  const values = state.reviewDraft[`${category}Aromas`];
  const groups = getAromaGroups(category, type);
  const groupNames = Object.keys(groups);

  selectedHost.innerHTML = values.length
    ? values.map((value) => `<span class="pill">${value}</span>`).join("")
    : '<span class="muted">아직 선택한 향미가 없습니다.</span>';

  selector.innerHTML = `
    <div class="aroma-add-row">
      <select data-aroma-group="${category}">
        ${groupNames.map((groupName) => `<option value="${groupName}">${groupName}</option>`).join("")}
      </select>
      <input type="text" data-aroma-input="${category}" placeholder="없는 향미를 직접 추가">
      <button type="button" class="ghost-button" data-aroma-add="${category}" style="color:var(--text); border-color:var(--line); background:var(--surface-strong)">향미 추가</button>
    </div>
    <div class="aroma-add-status" data-aroma-status="${category}">기본 향미에 없는 표현은 직접 추가해 다음 리뷰에서도 계속 쓸 수 있습니다.</div>
  ` + Object.entries(groups).map(([groupName, options]) => `
    <div class="aroma-category">
      <div class="aroma-category-head">
        <strong>${groupName}</strong>
        <span>${options.length} notes</span>
      </div>
      <div class="aroma-chip-row">
        ${options.map((option) => `<button type="button" class="aroma-chip${values.includes(option) ? " active" : ""}" data-aroma-category="${category}" data-aroma-value="${option}">${option}</button>`).join("")}
      </div>
    </div>
  `).join("");
  selector.querySelectorAll("[data-aroma-category]").forEach((button) => {
    button.addEventListener("click", () => toggleAromaSelection(category, button.dataset.aromaValue));
  });
  const addButton = selector.querySelector(`[data-aroma-add="${category}"]`);
  const input = selector.querySelector(`[data-aroma-input="${category}"]`);
  const groupSelect = selector.querySelector(`[data-aroma-group="${category}"]`);
  const status = selector.querySelector(`[data-aroma-status="${category}"]`);
  const submitCustom = () => {
    const result = addCustomAroma(category, type, groupSelect.value, input.value);
    renderAromaSelector(category, type);
    const refreshedStatus = selector.querySelector(`[data-aroma-status="${category}"]`);
    if (refreshedStatus) {
      refreshedStatus.textContent = result.message;
    }
    if (input) {
      input.value = "";
    }
  };
  addButton.addEventListener("click", submitCustom);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitCustom();
    }
  });
}

function toggleAromaSelection(category, value, forceOn = false) {
  const key = `${category}Aromas`;
  const current = state.reviewDraft[key];
  state.reviewDraft[key] = current.includes(value)
    ? (forceOn ? current : current.filter((item) => item !== value))
    : [...current, value];
  renderAromaSelector(category, el.wineType.value || "Red");
}

async function handleLogin(event) {
  event.preventDefault();
  if (!state.supabase) {
    return;
  }

  const email = el.adminEmail.value.trim();
  const password = el.adminPassword.value.trim();
  if (!email || !password) {
    el.authStatus.textContent = "\uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638\uB97C \uBA3C\uC800 \uC785\uB825\uD574 \uC8FC\uC138\uC694.";
    return;
  }

  el.authStatus.textContent = "\uB85C\uADF8\uC778 \uC911...";
  const { error } = await state.supabase.auth.signInWithPassword({ email, password });
  el.authStatus.textContent = error ? `\uB85C\uADF8\uC778 \uC2E4\uD328: ${error.message}` : "\uB85C\uADF8\uC778\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
}

async function handleSignup() {
  if (!state.supabase) {
    return;
  }

  const email = el.adminEmail.value.trim();
  const password = el.adminPassword.value.trim();
  if (!email || !password) {
    el.authStatus.textContent = "\uAD00\uB9AC\uC790 \uACC4\uC815\uC744 \uB9CC\uB4E4\uB824\uBA74 \uC774\uBA54\uC77C\uACFC \uBE44\uBC00\uBC88\uD638\uB97C \uBA3C\uC800 \uC785\uB825\uD574 \uC8FC\uC138\uC694.";
    return;
  }

  el.authStatus.textContent = "\uAD00\uB9AC\uC790 \uACC4\uC815 \uC0DD\uC131 \uC911...";
  const { error } = await state.supabase.auth.signUp({ email, password });
  el.authStatus.textContent = error
    ? `\uACC4\uC815 \uC0DD\uC131 \uC2E4\uD328: ${error.message}`
    : "\uACC4\uC815 \uC0DD\uC131 \uC694\uCCAD\uC774 \uC644\uB8CC\uB410\uC2B5\uB2C8\uB2E4. \uBA54\uC77C \uC778\uC99D\uC774 \uCF1C\uC838 \uC788\uB2E4\uBA74 \uC778\uC99D \uD6C4 \uB2E4\uC2DC \uB85C\uADF8\uC778\uD574 \uC8FC\uC138\uC694.";
}

async function handlePasswordResetRequest() {
  if (!state.supabase) {
    return;
  }

  const email = el.adminEmail.value.trim();
  if (!email) {
    el.authStatus.textContent = "비밀번호 재설정 메일을 보내려면 이메일을 먼저 입력해 주세요.";
    return;
  }

  el.authStatus.textContent = "비밀번호 재설정 메일 전송 중...";
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  const { error } = await state.supabase.auth.resetPasswordForEmail(email, { redirectTo });
  el.authStatus.textContent = error
    ? `재설정 메일 전송 실패: ${error.message}`
    : "비밀번호 재설정 메일을 보냈습니다. 메일을 받은 뒤 바로 링크를 눌러 새 비밀번호를 설정해 주세요.";
}

async function handlePasswordRecoverySubmit(event) {
  event.preventDefault();
  const recoverySessionReady = state.recoveryMode || (sessionStorage.getItem(STORAGE_KEYS.recoveryMode) === "1" && Boolean(state.session));
  if (!state.supabase || !recoverySessionReady) {
    el.authStatus.textContent = "재설정 링크를 다시 열어 비밀번호 변경을 진행해 주세요.";
    return;
  }

  const password = el.newPassword.value.trim();
  const confirm = el.confirmPassword.value.trim();
  if (!password || !confirm) {
    el.authStatus.textContent = "새 비밀번호와 확인 값을 모두 입력해 주세요.";
    return;
  }
  if (password.length < 6) {
    el.authStatus.textContent = "새 비밀번호는 6자 이상으로 입력해 주세요.";
    return;
  }
  if (password !== confirm) {
    el.authStatus.textContent = "새 비밀번호와 확인 값이 서로 다릅니다.";
    return;
  }

  el.authStatus.textContent = "새 비밀번호 저장 중...";
  const { error } = await state.supabase.auth.updateUser({ password });
  if (error) {
    el.authStatus.textContent = `비밀번호 변경 실패: ${error.message}`;
    return;
  }

  state.recoveryMode = false;
  state.recoveryError = "";
  sessionStorage.removeItem(STORAGE_KEYS.recoveryMode);
  el.newPassword.value = "";
  el.confirmPassword.value = "";
  updatePasswordRecoveryUi();
  el.authStatus.textContent = "비밀번호가 변경되었습니다. 이제 새 비밀번호로 로그인하시면 됩니다.";
}

function cancelPasswordRecovery() {
  state.recoveryMode = false;
  state.recoveryError = "";
  sessionStorage.removeItem(STORAGE_KEYS.recoveryMode);
  el.newPassword.value = "";
  el.confirmPassword.value = "";
  updatePasswordRecoveryUi();
}

async function handleLogout() {
  if (!state.supabase) {
    return;
  }

  await state.supabase.auth.signOut();
  resetReviewForm();
}

function startReviewEdit(wineId, reviewId) {
  if (!state.isAdmin) {
    return;
  }

  const wine = state.wines.find((item) => item.id === wineId);
  const review = wine?.reviews.find((item) => String(item.id) === String(reviewId));
  if (!wine || !review) {
    return;
  }

  state.reviewFormMode = "edit";
  state.editingWineId = wineId;
  state.editingReviewId = reviewId;
  el.reviewPersona.value = review.personaId;
  el.wineType.value = wine.type || "Red";
  el.wineName.value = wine.name || "";
  el.wineProducer.value = wine.producer || "";
  el.wineVintage.value = wine.vintage || "";
  el.wineVarietal.value = wine.varietal || "";
  el.wineRegion.value = wine.region || "";
  el.wineSubRegion.value = wine.subRegion || "";
  el.winePrice.value = wine.averagePrice || "";
  el.wineImage.value = isUsableImageUrl(wine.image || "") ? wine.image : "";
  state.imageCandidates = [];
  el.overallScore.value = review.overallScore ?? "";
  el.wineReview.value = review.summary || review.note || "";
  state.reviewDraft = {
    structure: normalizeReviewStructure(review.structure, getReviewTypeKey(wine.type)),
    primaryAromas: normalizeAromaList(review.primaryAromas),
    secondaryAromas: normalizeAromaList(review.secondaryAromas),
    tertiaryAromas: normalizeAromaList(review.tertiaryAromas)
  };
  el.reviewSubmitLabel.textContent = "\uB9AC\uBDF0 \uC218\uC815 \uC800\uC7A5\uD558\uAE30";
  el.cancelEditButton.hidden = false;
  syncImagePreview();
  renderImageCandidates();
  syncReviewEditor();
  populateReviewInputs();
  el.reviewForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startReviewForWine(wineId) {
  const wine = state.wines.find((item) => item.id === wineId);
  if (!wine) {
    return;
  }

  resetReviewForm();
  el.wineName.value = wine.name || "";
  el.wineType.value = wine.type || "Red";
  el.wineProducer.value = wine.producer || "";
  el.wineVintage.value = wine.vintage || "";
  el.wineVarietal.value = wine.varietal || "";
  el.wineRegion.value = wine.region || "";
  el.wineSubRegion.value = wine.subRegion || "";
  el.winePrice.value = wine.averagePrice || "";
  el.wineImage.value = isUsableImageUrl(wine.image || "") ? wine.image : "";

  const reviewedPersonaIds = new Set(wine.reviews.map((review) => review.personaId));
  const nextPersona = state.personas.find((persona) => !reviewedPersonaIds.has(persona.id)) || state.personas[0];
  if (nextPersona) {
    el.reviewPersona.value = nextPersona.id;
  }

  syncImagePreview();
  syncReviewEditor();
  populateReviewInputs();
  el.reviewForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetReviewForm() {
  state.reviewFormMode = "create";
  state.editingWineId = null;
  state.editingReviewId = null;
  el.reviewForm.reset();
  el.reviewPersona.value = state.personas[0]?.id || "";
  el.wineType.value = "Red";
  el.wineProducer.value = "";
  el.wineSubRegion.value = "";
  state.reviewDraft = createEmptyReviewDraft("Red");
  state.imageCandidates = [];
  el.reviewSubmitLabel.textContent = "\uB9AC\uBDF0 \uC800\uC7A5\uD558\uAE30";
  el.cancelEditButton.hidden = true;
  el.fetchStatus.textContent = "\uC774\uBBF8\uC9C0\uB294 \uD6C4\uBCF4\uB97C \uBA3C\uC800 \uBCF4\uACE0 \uC120\uD0DD\uD558\uACE0, \uAC00\uACA9\uC740 \uBCC4\uB3C4\uB85C \uC870\uD68C\uD569\uB2C8\uB2E4.";
  syncImagePreview();
  renderImageCandidates();
  syncReviewEditor();
  populateReviewInputs();
  setReviewStatus("\uB9AC\uBDF0\uB97C \uC800\uC7A5\uD558\uBA74 \uC5EC\uAE30\uC5D0\uC11C \uACB0\uACFC\uB97C \uBC14\uB85C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.", "idle");
}

function setReviewStatus(message, tone = "idle") {
  if (!el.reviewStatus) {
    return;
  }
  el.reviewStatus.textContent = message;
  el.reviewStatus.dataset.tone = tone;
}

function toggleReviewSavingState(isSaving) {
  const submitButton = el.reviewSubmitLabel;
  if (!submitButton) {
    return;
  }
  submitButton.disabled = isSaving;
  submitButton.textContent = isSaving
    ? "\uC800\uC7A5 \uC911..."
    : (state.reviewFormMode === "edit" ? "\uB9AC\uBDF0 \uC218\uC815 \uC800\uC7A5\uD558\uAE30" : "\uB9AC\uBDF0 \uC800\uC7A5\uD558\uAE30");
}

function formatReviewSaveError(error) {
  const message = String(error?.message || "");
  if (message.includes("schema cache") || message.includes("column")) {
    const missingColumn = message.match(/Could not find the '([^']+)' column of '([^']+)'/i);
    if (missingColumn) {
      const [, column, table] = missingColumn;
      const columnSql = {
        producer: "alter table wines add column if not exists producer text;",
        sub_region: "alter table wines add column if not exists sub_region text;",
        average_price: "alter table wines add column if not exists average_price text;",
        image_url: "alter table wines add column if not exists image_url text;",
        summary: "alter table reviews add column if not exists summary text;",
        overall_score: "alter table reviews add column if not exists overall_score integer;",
        structure: "alter table reviews add column if not exists structure jsonb default '{}'::jsonb;",
        primary_aromas: "alter table reviews add column if not exists primary_aromas text[] default '{}'::text[];",
        secondary_aromas: "alter table reviews add column if not exists secondary_aromas text[] default '{}'::text[];",
        tertiary_aromas: "alter table reviews add column if not exists tertiary_aromas text[] default '{}'::text[];",
        author_name: "alter table comments add column if not exists author_name text;",
        body: "alter table comments add column if not exists body text;"
      };
      const sqlHint = columnSql[column] || `-- ${table}.${column} 컬럼을 추가하는 alter table 문을 실행해 주세요.`;
      return `Supabase 테이블에 필요한 컬럼이 아직 없습니다.\n\n빠진 컬럼: ${table}.${column}\n실행할 SQL:\n${sqlHint}\n\n참고: create table if not exists 는 기존 테이블에 새 컬럼을 추가하지 않습니다. 이미 테이블이 있으면 alter table ... add column if not exists ... 를 실행해야 합니다.`;
    }
    return `저장은 시도됐지만 Supabase 테이블 구조가 현재 페이지 버전과 어긋나 있습니다. \`supabase-schema.sql\`을 SQL Editor에서 다시 실행해 producer, sub_region, overall_score, aroma/comment 관련 컬럼을 한 번에 맞춰주세요.\n\n실제 오류: ${message}`;
  }
  return message || "\uC800\uC7A5 \uACFC\uC815\uC744 \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.";
}

async function handleReviewSave(event) {
  event.preventDefault();
  if (!state.isAdmin) {
    setReviewStatus("\uAD00\uB9AC\uC790 \uB85C\uADF8\uC778 \uD6C4\uC5D0\uB9CC \uB9AC\uBDF0\uB97C \uC800\uC7A5\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", "error");
    return;
  }

  const payload = {
    personaId: el.reviewPersona.value,
    type: el.wineType.value,
    name: el.wineName.value.trim(),
    producer: el.wineProducer.value.trim(),
    vintage: el.wineVintage.value.trim(),
    varietal: el.wineVarietal.value.trim(),
    region: el.wineRegion.value.trim(),
    subRegion: el.wineSubRegion.value.trim(),
    averagePrice: el.winePrice.value.trim(),
    image: el.wineImage.value.trim(),
    overallScore: el.overallScore.value.trim(),
    summary: el.wineReview.value.trim(),
    structure: { ...state.reviewDraft.structure },
    primaryAromas: [...state.reviewDraft.primaryAromas],
    secondaryAromas: [...state.reviewDraft.secondaryAromas],
    tertiaryAromas: [...state.reviewDraft.tertiaryAromas]
  };

  if (!payload.personaId || !payload.name || !payload.summary || !payload.overallScore) {
    if (!payload.personaId) {
      setReviewStatus("\uB9AC\uBDF0\uB97C \uC800\uC7A5\uD558\uB824\uBA74 \uBA3C\uC800 \uB9AC\uBDF0\uC5B4 Persona\uB97C \uC120\uD0DD\uD574 \uC8FC\uC138\uC694.", "error");
    } else if (!payload.overallScore) {
      setReviewStatus("Overall score\uB97C \uC785\uB825\uD574 \uC8FC\uC138\uC694.", "error");
    } else {
      setReviewStatus("\uC640\uC778\uBA85\uACFC Overall Summary\uB97C \uD568\uAED8 \uC785\uB825\uD574 \uC8FC\uC138\uC694.", "error");
    }
    return;
  }

  const numericScore = Number(payload.overallScore);
  if (Number.isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
    setReviewStatus("Overall score\uB294 0\uBD80\uD130 100 \uC0AC\uC774 \uAC12\uC73C\uB85C \uC785\uB825\uD574 \uC8FC\uC138\uC694.", "error");
    return;
  }

  const savingLabel = state.reviewFormMode === "edit"
    ? "\uB9AC\uBDF0 \uC218\uC815 \uC800\uC7A5 \uC911..."
    : "\uB9AC\uBDF0 \uC800\uC7A5 \uC911...";
  setReviewStatus(savingLabel, "saving");
  toggleReviewSavingState(true);

  try {
    const result = state.reviewFormMode === "edit"
      ? await updateExistingReview(payload)
      : await createNewReview(payload);

    saveLocal();
    renderAll();
    resetReviewForm();

    const storageLabel = state.supabase
      ? "Supabase\uC5D0 \uBC18\uC601\uB418\uACE0 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0 \uC801\uC6A9\uB410\uC2B5\uB2C8\uB2E4."
      : "Local Mode\uB85C \uC800\uC7A5\uB418\uC5C8\uACE0, \uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uACC4\uC18D \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.";
    setReviewStatus(`\uB9AC\uBDF0\uAC00 \uC800\uC7A5\uB410\uC2B5\uB2C8\uB2E4. ${storageLabel}`, "success");

    if (result?.wineId) {
      requestAnimationFrame(() => {
        const wineCard = document.getElementById(`wine-${result.wineId}`);
        wineCard?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  } catch (error) {
    console.error(error);
    setReviewStatus(`\uB9AC\uBDF0 \uC800\uC7A5\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. ${formatReviewSaveError(error)}`, "error");
  } finally {
    toggleReviewSavingState(false);
  }
}

async function createNewReview(payload) {
  let wine = state.wines.find((item) => item.name.toLowerCase() === payload.name.toLowerCase());
  if (!wine) {
    wine = {
      id: `wine-${Date.now()}`,
      name: payload.name,
      producer: payload.producer,
      vintage: payload.vintage,
      type: payload.type,
      varietal: payload.varietal,
      region: payload.region,
      subRegion: payload.subRegion,
      averagePrice: payload.averagePrice,
      image: payload.image || makePlaceholderImage(payload.name, "#7a1f35", "#f1ddd2"),
      reviews: []
    };
    state.wines.unshift(wine);
  } else {
    wine.producer = payload.producer || wine.producer;
    wine.vintage = payload.vintage || wine.vintage;
    wine.type = payload.type || wine.type;
    wine.varietal = payload.varietal || wine.varietal;
    wine.region = payload.region || wine.region;
    wine.subRegion = payload.subRegion || wine.subRegion;
    wine.averagePrice = payload.averagePrice || wine.averagePrice;
    if (payload.image) {
      wine.image = payload.image;
    }
  }

  const review = {
    id: `local-${cryptoRandomId()}`,
    personaId: payload.personaId,
    note: payload.summary,
    summary: payload.summary,
    overallScore: Number(payload.overallScore),
    structure: payload.structure,
    primaryAromas: payload.primaryAromas,
    secondaryAromas: payload.secondaryAromas,
    tertiaryAromas: payload.tertiaryAromas,
    createdAt: new Date().toISOString().slice(0, 10)
  };

  wine.reviews.unshift(review);
  const persistedReview = await persistReviewCreate(wine, review);
  if (persistedReview?.id) {
    review.id = persistedReview.id;
  }
  return { wineId: wine.id, reviewId: review.id };
}
async function updateExistingReview(payload) {
  const wine = state.wines.find((item) => item.id === state.editingWineId);
  const review = wine?.reviews.find((item) => String(item.id) === String(state.editingReviewId));
  if (!wine || !review) {
    throw new Error("\uC218\uC815\uD560 \uB9AC\uBDF0\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4.");
  }

  wine.name = payload.name;
  wine.producer = payload.producer;
  wine.vintage = payload.vintage;
  wine.type = payload.type;
  wine.varietal = payload.varietal;
  wine.region = payload.region;
  wine.subRegion = payload.subRegion;
  wine.averagePrice = payload.averagePrice;
  wine.image = payload.image || wine.image || makePlaceholderImage(payload.name, "#7a1f35", "#f1ddd2");
  review.personaId = payload.personaId;
  review.note = payload.summary;
  review.summary = payload.summary;
  review.overallScore = Number(payload.overallScore);
  review.structure = payload.structure;
  review.primaryAromas = payload.primaryAromas;
  review.secondaryAromas = payload.secondaryAromas;
  review.tertiaryAromas = payload.tertiaryAromas;
  review.createdAt = new Date().toISOString().slice(0, 10);

  await persistReviewUpdate(wine, review);
  return { wineId: wine.id, reviewId: review.id };
}

async function handleReviewDelete(wineId, reviewId) {
  if (!state.isAdmin) {
    return;
  }

  const wine = state.wines.find((item) => item.id === wineId);
  const review = wine?.reviews.find((item) => String(item.id) === String(reviewId));
  if (!wine || !review) {
    return;
  }

  const ok = window.confirm(`'${wine.name}' 리뷰를 삭제할까요?`);
  if (!ok) {
    return;
  }

  wine.reviews = wine.reviews.filter((item) => String(item.id) !== String(reviewId));
  if (!wine.reviews.length) {
    state.wines = state.wines.filter((item) => item.id !== wine.id);
  }

  await persistReviewDelete(wine.id, review.id, !wine.reviews.length);
  saveLocal();
  renderAll();
  if (state.editingReviewId === reviewId) {
    resetReviewForm();
  }
}

async function handleTasteSave(event) {
  event.preventDefault();
  if (!state.isAdmin) {
    alert("\uad00\ub9ac\uc790 \ub85c\uadf8\uc778 \ud6c4\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");
    return;
  }

  const personaName = el.personaNameInput.value.trim();
  const selectedPersonaId = el.tastePersona.value !== "__new__" ? el.tastePersona.value : "";
  if (!personaName) {
    alert("Persona Name\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.");
    return;
  }

  const existingByName = state.personas.find((item) => item.name.trim().toLowerCase() === personaName.toLowerCase());
  const rawId = selectedPersonaId || existingByName?.id || slugifyPersonaId(personaName) || `persona-${cryptoRandomId()}`;

  let persona = state.personas.find((item) => item.id === rawId);
  if (!persona) {
    persona = {
      id: rawId,
      name: personaName,
      role: "",
      focus: "",
      summary: "",
      tastes: {
        red: createEmptyTaste(),
        white: createEmptyTaste()
      }
    };
    state.personas.push(persona);
  }

  persona.name = personaName;
  persona.summary = el.personaSummaryInput.value.trim();
  const mode = el.tasteMode.value;
  persona.tastes[mode] = {
    favoritePairs: [
      {
        varietal: el.favVarietyOne.value.trim(),
        region: el.favRegionOne.value.trim()
      },
      {
        varietal: el.favVarietyTwo.value.trim(),
        region: el.favRegionTwo.value.trim()
      }
    ],
    fruitDriven: state.tasteDraft.fruitDriven,
    oak: state.tasteDraft.oak,
    acidity: state.tasteDraft.acidity,
    body: state.tasteDraft.body,
    fruitProfile: state.tasteDraft.fruitProfile
  };
  persona.role = persona.summary;
  persona.focus = "";

  try {
    await persistPersona(persona);
  } catch (error) {
    console.error(error);
    el.authStatus.innerHTML = `&#xD398;&#xB974;&#xC18C;&#xB098; &#xC800;&#xC7A5; &#xC911; &#xC624;&#xB958;&#xAC00; &#xC788;&#xC5C8;&#xC9C0;&#xB9CC; &#xB85C;&#xCEEC; &#xB370;&#xC774;&#xD130;&#xB294; &#xACC4;&#xC18D; &#xC720;&#xC9C0;&#xD569;&#xB2C8;&#xB2E4;.`; 
  }

  state.personas = [...state.personas];
  saveLocal();
  populatePersonaOptions();
  el.tastePersona.value = persona.id;
  el.reviewPersona.value = persona.id;
  state.selectedPersona = persona.id;
  syncTasteEditor();
  renderAll();
  el.authStatus.innerHTML = `&#xD398;&#xB974;&#xC18C;&#xB098; <b>${escapeHtml(persona.name)}</b>&#xC758; &#xCDE8;&#xD5A5; &#xC815;&#xBCF4;&#xB97C; &#xC800;&#xC7A5;&#xD588;&#xC2B5;&#xB2C8;&#xB2E4;.`;
}

async function handlePersonaDelete() {
  if (!state.isAdmin) {
    return;
  }

  const personaId = el.tastePersona.value;
  if (!personaId || personaId === "__new__") {
    return;
  }

  const persona = state.personas.find((item) => item.id === personaId);
  if (!persona) {
    return;
  }

  const ok = window.confirm(`${persona.name} persona를 삭제할까요? 함께 연결된 리뷰도 같이 정리됩니다.`);
  if (!ok) {
    return;
  }

  state.personas = state.personas.filter((item) => item.id !== personaId);
  state.wines = state.wines
    .map((wine) => ({
      ...wine,
      reviews: wine.reviews.filter((review) => review.personaId !== personaId)
    }))
    .filter((wine) => wine.reviews.length);

  await persistPersonaDelete(personaId);
  saveLocal();
  populatePersonaOptions();
  el.tastePersona.value = state.personas[0]?.id || "__new__";
  el.reviewPersona.value = state.personas[0]?.id || "";
  syncTasteEditor();
  renderAll();
}

async function handleImageLookup() {
  const query = buildWineLookupQuery();
  if (!query.primary) {
    el.fetchStatus.textContent = "이미지 후보를 찾으려면 와인명이나 Producer 중 하나는 먼저 입력해 주세요.";
    return;
  }

  state.imageCandidates = [];
  renderImageCandidates();
  setUploadFallbackVisible(false);
  el.fetchStatus.textContent = "공식 와이너리, 수입사, 상품 페이지를 먼저 찾고 없으면 공개 이미지 소스까지 순차적으로 탐색합니다.";

  try {
    const data = await requestWineLookup("image", query);
    const incomingCandidates = Array.isArray(data.image_candidates) ? data.image_candidates : [];
    state.imageCandidates = mergeImageCandidates([], incomingCandidates);
    renderImageCandidates();

    if (!state.imageCandidates.length) {
      setUploadFallbackVisible(true, "자동 탐색에서 마땅한 이미지 후보를 찾지 못해 마지막 대안으로 직접 업로드를 열었습니다.");
      el.fetchStatus.textContent = data.note || "자동 탐색으로 쓸 수 있는 이미지 후보를 찾지 못해 직접 업로드로 보완할 수 있게 했습니다.";
      return;
    }

    setUploadFallbackVisible(false);
    if (!el.wineImage.value.trim() && state.imageCandidates[0]?.image_url) {
      applyImageCandidate(state.imageCandidates[0]);
    } else {
      el.fetchStatus.textContent = data.note || `${state.imageCandidates.length}개의 이미지 후보를 찾았습니다. 마음에 드는 이미지를 골라 적용해 주세요.`;
    }
  } catch (error) {
    setUploadFallbackVisible(true, "자동 탐색 중 오류가 발생해 수동 업로드 영역을 열었습니다.");
    el.fetchStatus.textContent = `이미지 후보 조회에 실패했습니다. ${error.message || "Cloudflare Function 또는 API 설정을 확인해 주세요."}`;
  }
}
async function handlePriceLookup() {
  const query = buildWineLookupQuery();
  if (!query.primary) {
    el.fetchStatus.textContent = "가격 조회를 하려면 와인명이나 Producer 중 하나는 먼저 입력해 주세요.";
    return;
  }

  const existingWine = findClosestExistingWine();
  if (existingWine?.averagePrice && !el.winePrice.value.trim()) {
    el.winePrice.value = existingWine.averagePrice;
    el.fetchStatus.textContent = `기존 등록 와인 '${existingWine.name}'에 저장된 가격 메모를 먼저 불러왔습니다.`;
    return;
  }

  el.fetchStatus.textContent = "가격 정보를 찾는 중입니다...";
  try {
    const data = await requestWineLookup("price", query);
    if (data.average_price) {
      el.winePrice.value = data.average_price;
      el.fetchStatus.textContent = data.note || "가격 정보를 찾아 폼에 반영했습니다.";
      return;
    }
    el.fetchStatus.textContent = "일치하는 가격 정보를 찾지 못했습니다. Wine-Searcher API 연결 상태도 함께 확인해 주세요.";
  } catch (error) {
    el.fetchStatus.textContent = `가격 조회에 실패했습니다. ${error.message || "Cloudflare Function 또는 API 설정을 확인해 주세요."}`;
  }
}

function buildWineLookupQuery() {
  const parts = [
    el.wineProducer.value,
    el.wineName.value,
    el.wineVintage.value,
    el.wineVarietal.value,
    el.wineRegion.value,
    el.wineSubRegion.value
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean);
  return {
    primary: parts.join(" "),
    fallback: [el.wineProducer.value, el.wineName.value, el.wineVintage.value]
      .map((value) => String(value || "").trim())
      .filter(Boolean)
      .join(" ")
  };
}

async function requestWineLookup(mode, query) {
  const params = new URLSearchParams();
  params.set("lookup", mode);
  params.set("q", query.primary);
  params.set("name", el.wineName.value.trim());
  params.set("producer", el.wineProducer.value.trim());
  params.set("vintage", el.wineVintage.value.trim());
  params.set("varietal", el.wineVarietal.value.trim());
  params.set("region", el.wineRegion.value.trim());
  params.set("subRegion", el.wineSubRegion.value.trim());
  params.set("type", el.wineType.value.trim());

  const response = await fetch(`/functions/wine-lookup?${params.toString()}`);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.note || data.error || `${mode} lookup failed`);
  }
  return data;
}

function findClosestExistingWine() {
  const name = normalizeLookupValue(el.wineName.value);
  const producer = normalizeLookupValue(el.wineProducer.value);
  const vintage = String(el.wineVintage.value || "").trim();
  if (!name && !producer) {
    return null;
  }

  let bestWine = null;
  let bestScore = 0;
  state.wines.forEach((wine) => {
    let score = 0;
    if (name && normalizeLookupValue(wine.name).includes(name)) {
      score += 8;
    }
    if (producer && normalizeLookupValue(wine.producer || "").includes(producer)) {
      score += 6;
    }
    if (vintage && String(wine.vintage || "") === vintage) {
      score += 3;
    }
    if (score > bestScore) {
      bestScore = score;
      bestWine = wine;
    }
  });

  return bestScore >= 6 ? bestWine : null;
}

function clearImageField() {
  el.wineImage.value = "";
  if (el.wineImageLibrary) {
    el.wineImageLibrary.value = "";
  }
  if (el.wineImageCamera) {
    el.wineImageCamera.value = "";
  }
  syncImagePreview();
}

function mergeImageCandidates(existing, incoming) {
  const merged = [...existing];
  incoming.forEach((candidate) => {
    if (!candidate?.image_url || !isUsableImageUrl(candidate.image_url)) {
      return;
    }
    if (!merged.some((item) => item.image_url === candidate.image_url)) {
      merged.push(candidate);
    }
  });
  return merged.slice(0, 6);
}

function renderImageCandidates() {
  if (!el.imageCandidateGrid) {
    return;
  }
  el.imageCandidateGrid.innerHTML = state.imageCandidates.length
    ? state.imageCandidates.map((candidate, index) => `
      <div class="candidate-card">
        <img src="${escapeHtml(candidate.image_url)}" alt="\uCD94\uCC9C \uC774\uBBF8\uC9C0 \uD6C4\uBCF4 ${index + 1}">
        <div class="candidate-meta">
          <strong>${escapeHtml(candidate.image_source || "Image candidate")}</strong>
          <span>${escapeHtml(candidate.matched_query || "")}</span>
        </div>
        <button class="ghost-button" type="button" data-image-candidate="${index}" style="color:var(--text); border-color:var(--line); background:var(--surface-strong)">\uC774 \uC774\uBBF8\uC9C0 \uC0AC\uC6A9</button>
      </div>
    `).join("")
    : '<div class="empty-state">\uC544\uC9C1 \uBD88\uB7EC\uC628 \uC774\uBBF8\uC9C0 \uD6C4\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uACF5\uC2DD \uD398\uC774\uC9C0, \uC218\uC785\uC0AC \uD398\uC774\uC9C0, \uACF5\uAC1C \uC774\uBBF8\uC9C0 \uC18C\uC2A4\uB97C \uC21C\uC11C\uB300\uB85C \uCC3E\uACE0 \uC788\uC73C\uB2C8 \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD558\uAC70\uB098 \uC544\uB798 \uC5C5\uB85C\uB4DC fallback\uC744 \uC774\uC6A9\uD574 \uC8FC\uC138\uC694.</div>';

  el.imageCandidateGrid.querySelectorAll("[data-image-candidate]").forEach((button) => {
    button.addEventListener("click", () => {
      const candidate = state.imageCandidates[Number(button.dataset.imageCandidate)];
      if (candidate) {
        applyImageCandidate(candidate);
      }
    });
  });
}
function applyImageCandidate(candidate) {
  if (!candidate?.image_url || !isUsableImageUrl(candidate.image_url)) {
    el.fetchStatus.textContent = "\uC120\uD0DD\uD55C \uD6C4\uBCF4\uAC00 \uC2E4\uC81C \uC774\uBBF8\uC9C0 \uD30C\uC77C\uC774 \uC544\uB2C8\uB77C\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD6C4\uBCF4\uB97C \uACE0\uB974\uAC70\uB098 \uC9C1\uC811 \uC5C5\uB85C\uB4DC\uD574 \uC8FC\uC138\uC694.";
    return;
  }
  el.wineImage.value = candidate.image_url;
  syncImagePreview(candidate.image_source || "");
  setUploadFallbackVisible(false);
  el.fetchStatus.textContent = `\uC774\uBBF8\uC9C0 \uD6C4\uBCF4\uB97C \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4${candidate.image_source ? ` (${candidate.image_source})` : ""}.`;
}

function isPlaceholderImage(url) {
  return String(url || "").startsWith("data:image/svg+xml") && String(url || "").includes("Vintage%20Varietal%20Region");
}
function isUsableImageUrl(url) {
  if (!url) {
    return false;
  }
  if (String(url).startsWith("data:image/")) {
    return true;
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    const href = parsed.href.toLowerCase();
    const path = parsed.pathname.toLowerCase();
    if (!/^https?:$/.test(parsed.protocol)) {
      return false;
    }
    if (
      host.includes("google.") ||
      host.includes("bing.com") ||
      host.includes("search.yahoo.com") ||
      href.includes("/search?") ||
      href.includes("tbm=isch") ||
      href.includes("/imgres?")
    ) {
      return false;
    }
    return /\.(jpg|jpeg|png|webp|gif|avif)$/i.test(path) ||
      host.includes("openverse") ||
      host.includes("wikimedia") ||
      host.includes("commons.wikimedia") ||
      host.includes("wine-searcher");
  } catch (_error) {
    return false;
  }
}

function setUploadFallbackVisible(visible, note = "") {
  if (el.uploadFallbackPanel) {
    el.uploadFallbackPanel.hidden = !visible;
  }
  if (el.uploadFallbackNote) {
    el.uploadFallbackNote.textContent = note || "\uACF5\uC2DD \uC640\uC774\uB108\uB9AC, \uC218\uC785\uC0AC, \uACF5\uAC1C \uC774\uBBF8\uC9C0 fallback\uAE4C\uC9C0 \uB05D\uB09C \uB4A4\uC5D0\uB3C4 \uC774\uBBF8\uC9C0\uB97C \uBABB \uCC3E\uC558\uC744 \uB54C\uB9CC \uC9C1\uC811 \uC5C5\uB85C\uB4DC\uB97C \uC5F4\uC5B4 \uC8FC\uC138\uC694.";
  }
}

async function handleImageUpload(event, sourceLabel) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    const dataUrl = await readFileAsDataUrl(file);
    el.wineImage.value = dataUrl;
    state.imageCandidates = [];
    renderImageCandidates();
    syncImagePreview(sourceLabel);
    setUploadFallbackVisible(true, "\uC790\uB3D9 \uD0D0\uC0C9\uC73C\uB85C \uC774\uBBF8\uC9C0\uB97C \uB05D\uB0B4 \uCC3E\uC9C0 \uBABB\uD574 \uC5C5\uB85C\uB4DC fallback\uC744 \uC5F4\uC5C8\uC2B5\uB2C8\uB2E4. \uC0AC\uC9C4 \uBCF4\uAD00\uD568\uC774\uB098 \uCE74\uBA54\uB77C \uCD2C\uC601\uC73C\uB85C \uC9C1\uC811 \uB123\uC5B4 \uC8FC\uC138\uC694.");
    el.fetchStatus.textContent = `${sourceLabel} \uC774\uBBF8\uC9C0\uB97C \uC5C5\uB85C\uB4DC\uD588\uC2B5\uB2C8\uB2E4.`;
  } catch (_error) {
    el.fetchStatus.textContent = `${sourceLabel} \uC5C5\uB85C\uB4DC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD30C\uC77C\uB85C \uB2E4\uC2DC \uC2DC\uB3C4\uD574 \uC8FC\uC138\uC694.`;
  } finally {
    event.target.value = "";
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("file-read-failed"));
    reader.readAsDataURL(file);
  });
}

function syncImagePreview(sourceLabel = "") {
  const imageUrl = el.wineImage.value.trim();
  if (!imageUrl || !isUsableImageUrl(imageUrl)) {
    el.imagePreviewCard.hidden = true;
    if (el.imagePreviewPlaceholder) {
      el.imagePreviewPlaceholder.hidden = false;
    }
    el.wineImagePreview.removeAttribute("src");
    el.imagePreviewCaption.textContent = imageUrl
      ? "\uC785\uB825\uB41C \uAC12\uC740 \uC788\uC9C0\uB9CC \uC2E4\uC81C \uC774\uBBF8\uC9C0\uB85C \uC4F8 \uC218 \uC5C6\uB294 \uC8FC\uC18C\uC785\uB2C8\uB2E4. \uAC80\uC0C9 \uACB0\uACFC \uD398\uC774\uC9C0\uB098 \uC798\uBABB\uB41C \uB9C1\uD06C\uC77C \uC218 \uC788\uC73C\uB2C8 \uB2E4\uB978 \uD6C4\uBCF4\uB97C \uACE0\uB974\uAC70\uB098 \uC9C1\uC811 \uC5C5\uB85C\uB4DC\uD574 \uC8FC\uC138\uC694."
      : "\uC544\uC9C1 \uBD88\uB7EC\uC628 \uC774\uBBF8\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC790\uB3D9 \uC870\uD68C \uD6C4 \uC5EC\uAE30\uC11C \uBA3C\uC800 \uD655\uC778\uD558\uC138\uC694.";
    return;
  }

  el.imagePreviewCard.hidden = false;
  if (el.imagePreviewPlaceholder) {
    el.imagePreviewPlaceholder.hidden = true;
  }
  el.wineImagePreview.src = imageUrl;
  el.imagePreviewCaption.textContent = sourceLabel
    ? `\uC120\uD0DD\uB41C \uC774\uBBF8\uC9C0 \uCD9C\uCC98: ${sourceLabel}`
    : "\uC120\uD0DD\uB41C \uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30";
}
async function persistPersona(persona) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("personas").upsert({
    id: persona.id,
    name: persona.name,
    role: persona.summary || buildPersonaCharacterSummary(persona),
    focus: "",
    red_taste: persona.tastes.red,
    white_taste: persona.tastes.white,
    display_order: state.personas.findIndex((item) => item.id === persona.id)
  });
}

function buildFavoriteDeck(redFavorites, whiteFavorites) {
  const parts = [];
  if (redFavorites.length) {
    parts.push(`\uB808\uB4DC \uCD5C\uC560 \uD488\uC885: ${redFavorites.join(", ")}`);
  }
  if (whiteFavorites.length) {
    parts.push(`\uD654\uC774\uD2B8 \uCD5C\uC560 \uD488\uC885: ${whiteFavorites.join(", ")}`);
  }
  return parts.length ? parts.join(" / ") : "\uC544\uC9C1 \uCD5C\uC560 \uD488\uC885 \uC785\uB825 \uC804\uC785\uB2C8\uB2E4.";
}

function buildPersonaCharacterSummary(persona) {
  const red = normalizeTaste(persona?.tastes?.red || {});
  const white = normalizeTaste(persona?.tastes?.white || {});
  return buildFavoriteDeck(formatFavoritePairs(red.favoritePairs), formatFavoritePairs(white.favoritePairs));
}


function buildPersonaSummaryLines(persona) {
  const red = normalizeTaste(persona?.tastes?.red || {});
  const white = normalizeTaste(persona?.tastes?.white || {});
  const redFavorites = formatFavoritePairs(red.favoritePairs);
  const whiteFavorites = formatFavoritePairs(white.favoritePairs);
  const headline = (persona?.summary || persona?.role || "").trim() || "\ud55c \uc904 \uc18c\uac1c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.";
  return {
    headline,
    deck: buildFavoriteDeck(redFavorites, whiteFavorites),
    red: buildModeSummary(red, "red"),
    white: buildModeSummary(white, "white")
  };
}

function buildPersonaHeadline(red, white) {
  return "";
}

function buildModeSummary(taste, mode) {
  if (mode === "white") {
    const fruitLine = taste.fruitDriven <= 3
      ? "\uACFC\uC2E4\uC774 \uBA3C\uC800 \uB610\uB832\uD558\uAC8C \uC5F4\uB9AC\uB294 \uD654\uC774\uD2B8\uC5D0 \uB354 \uC27D\uAC8C \uC190\uC774 \uAC11\uB2C8\uB2E4"
      : taste.fruitDriven >= 6
        ? "\uACFC\uC2E4\uBCF4\uB2E4\uB294 \uBBF8\uB124\uB784\uACFC \uC120\uC774 \uC0B4\uC544 \uC788\uB294 \uD654\uC774\uD2B8\uB97C \uB354 \uD3B8\uD558\uAC8C \uBD05\uB2C8\uB2E4"
        : "\uACFC\uC2E4\uACFC \uBBF8\uB124\uB784\uC774 \uADE0\uD615 \uC788\uAC8C \uB9DE\uBB3C\uB9AC\uB294 \uC2A4\uD0C0\uC77C\uC5D0 \uC548\uC815\uAC10\uC744 \uB290\uB081\uB2C8\uB2E4";
    const profileLine = taste.fruitProfile <= 2
      ? "\uC5F4\uB300 \uACFC\uC2E4 \uCABD\uC73C\uB85C \uBCFC\uB968\uC774 \uC2E4\uB9B4\uC218\uB85D \uB9CC\uC871\uB3C4\uAC00 \uC62C\uB77C\uAC00\uACE0"
      : taste.fruitProfile >= 6
        ? "\uC2DC\uD2B8\uB7EC\uC2A4\uAC00 \uC120\uBA85\uD558\uAC8C \uCE58\uACE0 \uB098\uC624\uB294 \uCABD\uC5D0 \uB354 \uBC18\uC751\uD558\uBA70"
        : "\uC5F4\uB300 \uACFC\uC2E4\uACFC \uC2DC\uD2B8\uB7EC\uC2A4\uAC00 \uBC18\uBC18 \uBCF4\uC774\uB294 \uACB0\uB3C4 \uD3B8\uD558\uAC8C \uBC1B\uC544\uB4E4\uC785\uB2C8\uB2E4";
    const acidityLine = taste.acidity <= 3
      ? "\uC0B0\uB3C4\uB294 \uB610\uB832\uD558\uAC8C \uC0B4\uC544 \uC788\uC5B4\uC57C \uC778\uC0C1\uC774 \uD750\uB824\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"
      : taste.acidity >= 6
        ? "\uC0B0\uB3C4\uAC00 \uB108\uBB34 \uB3C4\uB4DC\uB77C\uC9C0\uAE30\uBCF4\uB2E4 \uC9C8\uAC10\uC744 \uC815\uB9AC\uD574 \uC8FC\uB294 \uC815\uB3C4\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4"
        : "\uC0B0\uB3C4\uB294 \uC874\uC7AC\uAC10\uC740 \uBD84\uBA85\uD558\uB418 \uACFC\uD558\uC9C0 \uC54A\uC740 \uCABD\uC744 \uC120\uD638\uD569\uB2C8\uB2E4";
    const bodyLine = taste.body <= 3
      ? "\uBC14\uB514\uB294 \uC911\uAC04 \uC774\uC0C1\uC73C\uB85C \uCC28\uC624\uB97C \uB54C \uC644\uC131\uB3C4\uAC00 \uB290\uAEF4\uC9C0\uACE0"
      : taste.body >= 6
        ? "\uBC14\uB514\uB294 \uAC00\uBCBD\uACE0 \uB9E4\uB048\uD55C \uCABD\uC77C\uC218\uB85D \uC190\uC774 \uC790\uC8FC \uAC11\uB2C8\uB2E4"
        : "\uBC14\uB514\uB294 \uC911\uAC04 \uC815\uB3C4\uC758 \uBC00\uB3C4\uBA74 \uAC00\uC7A5 \uC548\uC815\uC801\uC73C\uB85C \uC77D\uD799\uB2C8\uB2E4";
    const oakLine = taste.oak <= 3
      ? "\uC624\uD06C\uB294 \uC874\uC7AC\uD558\uB418 \uC9C8\uAC10\uC744 \uB2E4\uB4EC\uB294 \uC218\uC900\uC774\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4"
      : taste.oak >= 6
        ? "\uC624\uD06C\uB294 \uCD5C\uB300\uD55C \uB4A4\uB85C \uBE60\uC838 \uC788\uC744\uC218\uB85D \uC88B\uC2B5\uB2C8\uB2E4"
        : "\uC624\uD06C\uB294 \uD5A5\uC744 \uB36E\uC9C0 \uC54A\uC744 \uB9CC\uD07C\uB9CC \uC5B9\uD600 \uC788\uB294 \uD3B8\uC744 \uC120\uD638\uD569\uB2C8\uB2E4";
    return `${fruitLine}. ${profileLine}. ${acidityLine}. ${bodyLine}. ${oakLine}.`;
  }

  const fruitLine = taste.fruitDriven <= 3
    ? "\uACFC\uC2E4\uC774 \uB610\uB832\uD558\uAC8C \uBA3C\uC800 \uCE58\uACE0 \uB098\uC624\uB294 \uB808\uB4DC\uC5D0 \uBC18\uC751\uC774 \uBE60\uB978 \uD3B8\uC785\uB2C8\uB2E4"
    : taste.fruitDriven >= 6
      ? "\uC138\uC774\uBCF4\uB9AC\uC640 \uD759 \uB0B4\uC74C\uC774 \uAC10\uB3C4\uB294 \uB808\uB4DC \uCABD\uC73C\uB85C \uB354 \uB9C8\uC74C\uC774 \uAC11\uB2C8\uB2E4"
      : "\uACFC\uC2E4\uACFC \uC138\uC774\uBCF4\uB9AC\uAC00 \uADE0\uD615\uC744 \uC774\uB8E8\uB294 \uB808\uB4DC\uC5D0 \uD3B8\uC548\uD568\uC744 \uB290\uB081\uB2C8\uB2E4";
  const profileLine = taste.fruitProfile <= 2
    ? "\uB2E4\uD06C \uD504\uB8E8\uD2B8 \uCABD\uC73C\uB85C \uACB0\uC774 \uAE4A\uC5B4\uC9C8\uC218\uB85D \uB9CC\uC871\uB3C4\uAC00 \uC62C\uB77C\uAC00\uACE0"
    : taste.fruitProfile >= 6
      ? "\uBD89\uC740 \uACFC\uC2E4\uC758 \uC120\uBA85\uD568\uC774 \uC0B4\uC544 \uC788\uB294 \uC2A4\uD0C0\uC77C\uC744 \uC120\uD638\uD558\uBA70"
      : "\uB2E4\uD06C \uD504\uB8E8\uD2B8\uC640 \uBD89\uC740 \uACFC\uC2E4\uC774 \uD568\uAED8 \uBCF4\uC774\uB294 \uAD6C\uAC04\uB3C4 \uCDA9\uBD84\uD788 \uB9E4\uB825\uC801\uC73C\uB85C \uBD05\uB2C8\uB2E4";
  const acidityLine = taste.acidity <= 3
    ? "\uC0B0\uB3C4\uB294 \uC640\uC778\uC758 \uACB0\uC744 \uC138\uC6CC \uC904 \uB9CC\uD07C \uBD84\uBA85\uD574\uC57C \uD558\uACE0"
    : taste.acidity >= 6
      ? "\uC0B0\uB3C4\uAC00 \uB108\uBB34 \uB3C4\uB4DC\uB77C\uC9C0\uC9C0 \uC54A\uACE0 \uC804\uCCB4 \uADE0\uD615\uC744 \uB2E4\uB4EC\uC5B4 \uC8FC\uBA74 \uCDA9\uBD84\uD558\uBA70"
      : "\uC0B0\uB3C4\uB294 \uC911\uAC04 \uC815\uB3C4\uC5D0\uC11C \uC640\uC778\uC758 \uACB0\uC744 \uBAA8\uC544 \uC8FC\uB294 \uCABD\uC744 \uC88B\uC544\uD569\uB2C8\uB2E4";
  const bodyLine = taste.body <= 3
    ? "\uBC14\uB514\uB294 \uC911\uAC04 \uC774\uC0C1\uC73C\uB85C \uBC00\uB3C4\uAC00 \uCC28\uC62C\uB77C\uC57C \uC548\uC815\uC801\uC73C\uB85C \uB290\uAEF4\uC9C0\uACE0"
    : taste.body >= 6
      ? "\uBC14\uB514\uAC00 \uAC00\uBCBD\uACE0 \uB9E4\uB048\uD55C \uCABD\uC774\uBA74 \uB354 \uC790\uC8FC \uC190\uC774 \uAC00\uACE0"
      : "\uBC14\uB514\uB294 \uC911\uAC04 \uC815\uB3C4\uC758 \uBB34\uAC8C\uAC10\uC774\uBA74 \uAC00\uC7A5 \uC548\uC815\uC801\uC73C\uB85C \uBC1B\uC544\uB4E4\uC785\uB2C8\uB2E4";
  const oakLine = taste.oak <= 3
    ? "\uC624\uD06C\uB294 \uC874\uC7AC\uAC10\uC774 \uC788\uB354\uB77C\uB3C4 \uACFC\uC2E4\uC744 \uB36E\uC9C0 \uC54A\uB294 \uC120\uC774\uBA74 \uC88B\uACE0"
    : taste.oak >= 6
      ? "\uC624\uD06C\uAC00 \uCD5C\uB300\uD55C \uB4A4\uB85C \uBE60\uC838 \uC788\uB294 \uD3B8\uC744 \uB354 \uC120\uD638\uD569\uB2C8\uB2E4"
      : "\uC624\uD06C\uB294 \uBC14\uB514\uC640 \uACFC\uC2E4\uC744 \uC815\uB9AC\uD574 \uC8FC\uB294 \uC815\uB3C4\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4";
  return `${fruitLine}. ${profileLine}. ${acidityLine}. ${bodyLine}. ${oakLine}.`;
}

function formatRegionPath(region, subRegion) {
  return [region, subRegion]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .join(" > ");
}

function describeFruitPreference(taste, mode) {
  if (mode === "white") {
    const drive = taste.fruitDriven <= 3 ? "\ud654\uc774\ud2b8\ub294 \uacfc\uc2e4\uc758 \uc120\uba85\ub3c4\uac00 \uba3c\uc800\uace0" : taste.fruitDriven >= 6 ? "\ud654\uc774\ud2b8\ub294 \ubbf8\ub124\ub784\uacfc \uc9c1\uc120\uc801\uc778 \uacb0\uc774 \uc6b0\uc120\uc774\uace0" : "\ud654\uc774\ud2b8\ub294 \uacfc\uc2e4\uacfc \ubbf8\ub124\ub784\uc774 \ub9de\ubb3c\ub9ac\ub294 \uc9c0\uc810\uc744 \uc88b\uc544\ud558\uace0";
    const profile = taste.fruitProfile <= 2 ? "\uc5f4\ub300 \uacfc\uc2e4 \ud1a4\uc774 \ub3cc\uba74 \ub354 \ubc18\uac11\uc2b5\ub2c8\ub2e4" : taste.fruitProfile >= 6 ? "\uc2dc\ud2b8\ub7ec\uc2a4 \uacb0\uc774 \ub610\ub835\ud560\uc218\ub85d \ub354 \ub9c8\uc74c\uc774 \uac11\ub2c8\ub2e4" : "\uc5f4\ub300 \uacfc\uc2e4\uacfc \uc2dc\ud2b8\ub7ec\uc2a4\uac00 \uacb9\uce58\ub294 \uad6c\uac04\uc744 \ud3b8\ud558\uac8c \ubd05\ub2c8\ub2e4";
    return `${drive} ${profile}`;
  }
  const drive = taste.fruitDriven <= 3 ? "\ub808\ub4dc\ub294 \uacfc\uc2e4\uc774 \uc55e\uc5d0 \ub098\uc624\ub294 \ud3b8\uc774 \uc88b\uace0" : taste.fruitDriven >= 6 ? "\ub808\ub4dc\ub294 \uc138\uc774\ubcf4\ub9ac\uc640 \uc5b4\uc2dc \ud1a4\uc774 \uc0b4\uc544 \uc788\ub294 \ud3b8\uc774 \uc88b\uace0" : "\ub808\ub4dc\ub294 \uacfc\uc2e4\uacfc \uc138\uc774\ubcf4\ub9ac\uac00 \ub9de\ubb3c\ub9ac\ub294 \uacb0\uc774 \uc88b\uace0";
  const profile = taste.fruitProfile <= 2 ? "\ub2e4\ud06c \ud504\ub8e8\ud2b8 \ucabd\uc73c\ub85c \uae30\uc6b8\uba74 \ub354 \ube60\ub974\uac8c \ubc18\uc751\ud569\ub2c8\ub2e4" : taste.fruitProfile >= 6 ? "\ub808\ub4dc \ud504\ub8e8\ud2b8 \ucabd\uc73c\ub85c \uae30\uc6b8\uba74 \ub354 \uc120\uba85\ud558\uac8c \ubc18\uc751\ud569\ub2c8\ub2e4" : "\ub808\ub4dc\uc640 \ub2e4\ud06c \ud504\ub8e8\ud2b8\uac00 \uad50\ucc28\ud558\ub294 \uc9c0\uc810\ub3c4 \uc790\uc5f0\uc2a4\ub7fd\uac8c \ubc1b\uc544\ub4e4\uc785\ub2c8\ub2e4";
  return `${drive} ${profile}`;
}

function formatFavoritePairs(pairs = []) {
  return (pairs || [])
    .map((pair) => [pair?.varietal, pair?.region].filter(Boolean).join(" - "))
    .filter(Boolean)
    .slice(0, 2);
}

async function persistPersonaDelete(personaId) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("personas").delete().eq("id", personaId);
}

async function persistReviewCreate(wine, review) {
  if (!state.supabase) {
    return null;
  }

  const { error: wineError } = await state.supabase.from("wines").upsert({
    id: wine.id,
    name: wine.name,
    producer: wine.producer,
    vintage: wine.vintage,
    type: wine.type,
    varietal: wine.varietal,
    region: wine.region,
    sub_region: wine.subRegion,
    average_price: wine.averagePrice,
    image_url: wine.image
  });
  if (wineError) {
    throw wineError;
  }

  const { data, error } = await state.supabase.from("reviews").insert({
    wine_id: wine.id,
    persona_id: review.personaId,
    note: review.note,
    summary: review.summary,
    overall_score: review.overallScore,
    structure: review.structure,
    primary_aromas: review.primaryAromas,
    secondary_aromas: review.secondaryAromas,
    tertiary_aromas: review.tertiaryAromas,
    created_at: review.createdAt
  }).select("id").single();

  if (error) {
    throw error;
  }

  return data;
}

async function handleWineDelete(wineId) {
  if (!state.isAdmin) {
    return;
  }

  const wine = state.wines.find((item) => item.id === wineId);
  if (!wine) {
    return;
  }

  const ok = window.confirm(`'${wine.name}' 와인 항목과 연결된 리뷰를 모두 삭제할까요?`);
  if (!ok) {
    return;
  }

  state.wines = state.wines.filter((item) => item.id !== wineId);

  if (state.editingWineId === wineId) {
    resetReviewForm();
  }

  await persistWineDelete(wineId);
  saveLocal();
  renderAll();
}

async function persistReviewUpdate(wine, review) {
  if (!state.supabase) {
    return;
  }

  const { error: wineError } = await state.supabase.from("wines").upsert({
    id: wine.id,
    name: wine.name,
    producer: wine.producer,
    vintage: wine.vintage,
    type: wine.type,
    varietal: wine.varietal,
    region: wine.region,
    sub_region: wine.subRegion,
    average_price: wine.averagePrice,
    image_url: wine.image
  });
  if (wineError) {
    throw wineError;
  }

  const { error: reviewError } = await state.supabase.from("reviews").update({
    persona_id: review.personaId,
    note: review.note,
    summary: review.summary,
    overall_score: review.overallScore,
    structure: review.structure,
    primary_aromas: review.primaryAromas,
    secondary_aromas: review.secondaryAromas,
    tertiary_aromas: review.tertiaryAromas,
    created_at: review.createdAt
  }).eq("id", review.id);
  if (reviewError) {
    throw reviewError;
  }
}

async function persistReviewDelete(wineId, reviewId, deleteWineToo) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("reviews").delete().eq("id", reviewId);
  if (deleteWineToo) {
    await state.supabase.from("wines").delete().eq("id", wineId);
  }
}

async function persistWineDelete(wineId) {
  if (!state.supabase) {
    return;
  }

  await state.supabase.from("wines").delete().eq("id", wineId);
}

async function persistCommentCreate(reviewId, comment) {
  if (!state.supabase || !/^\d+$/.test(String(reviewId))) {
    return null;
  }

  const { data, error } = await state.supabase.from("comments").insert({
    review_id: Number(reviewId),
    author_name: comment.authorName,
    body: comment.body,
    created_at: comment.createdAt
  }).select("id").single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  }[char]));
}

function makePlaceholderImage(title, start, end) {
  const safe = title.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${start}"/><stop offset="100%" stop-color="${end}"/></linearGradient></defs><rect width="800" height="600" rx="42" fill="url(#g)"/><circle cx="650" cy="120" r="110" fill="rgba(255,255,255,0.16)"/><circle cx="130" cy="520" r="160" fill="rgba(255,255,255,0.10)"/><text x="60" y="285" font-size="42" font-family="Pretendard, Apple SD Gothic Neo, Arial, sans-serif" font-weight="700" fill="white">${safe}</text><text x="60" y="340" font-size="22" font-family="Pretendard, Apple SD Gothic Neo, Arial, sans-serif" fill="rgba(255,255,255,0.84)">Vintage Varietal Region</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function cryptoRandomId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function slugifyPersonaId(value) {
  const normalized = String(value || "")
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "";
}

function clearAuthHash() {
  if (!window.location.hash) {
    return;
  }
  window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
}

function decodeURIComponentSafe(value) {
  try {
    return decodeURIComponent(String(value || "").replace(/\+/g, " "));
  } catch (_error) {
    return String(value || "");
  }
}

async function handleCommentSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const wine = state.wines.find((item) => item.id === form.dataset.wineId);
  const review = wine?.reviews.find((item) => String(item.id) === String(form.dataset.reviewId));
  if (!wine || !review) {
    return;
  }

  const authorInput = form.elements.namedItem("authorName");
  const bodyInput = form.elements.namedItem("body");
  const authorName = String(authorInput?.value || "").trim();
  const body = String(bodyInput?.value || "").trim();
  if (!authorName || !body) {
    return;
  }

  const comment = normalizeComment({
    id: `comment-${cryptoRandomId()}`,
    authorName,
    body,
    createdAt: new Date().toISOString().slice(0, 10)
  });
  review.comments = review.comments || [];
  review.comments.push(comment);

  const persisted = await persistCommentCreate(review.id, comment);
  if (persisted?.id) {
    comment.id = persisted.id;
  }

  saveLocal();
  renderWines();
}
