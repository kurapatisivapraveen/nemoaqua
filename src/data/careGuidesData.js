/**
 * Nemo Aquarium Store - Aquarium Care Guides Dataset
 * In-depth educational articles matching home page.png
 */

export const CARE_GUIDES = [
  {
    id: 'setup-tank',
    title: 'How to Set Up a Fish Tank for Beginners',
    category: 'Tank Setup',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0eb5?auto=format&fit=crop&w=600&q=80',
    summary: 'Essential steps for washing substrate, placing hardscape, filling water, and installing filters before introducing fish.',
    fullContent: `
      Setting up your first aquarium is an exciting journey. Follow these golden rules to establish a safe environment:
      
      1. Location Matters: Place your tank away from direct sunlight (which causes heavy algae blooms) and drafty windows or air conditioning vents.
      2. Rinse Substrate: Wash your aquarium gravel or sand in a bucket until the water runs clear before adding to the tank.
      3. Arrange Hardscape: Place rocks (like Dragon Stone) and driftwood before adding water. Ensure heavier rocks sit securely on the bottom glass.
      4. Fill Gently: Place a saucer or plate on your substrate and pour dechlorinated tap water over it to prevent kicking up dust clouds.
      5. Install Filter & Heater: Turn on your filtration and heater (set to 24°C–26°C for tropical fish). Let the equipment run 24–48 hours to stabilize.
    `,
    tips: ['Never use household soaps or detergents on aquarium tanks or decor.', 'Always use a leveling mat under rimless glass aquariums.'],
  },
  {
    id: 'water-quality',
    title: 'How to Maintain Crystal Clear Water Quality',
    category: 'Water Parameters',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80',
    summary: 'Mastering the nitrogen cycle: understanding ammonia, nitrites, nitrates, pH balance, and routine water testing.',
    fullContent: `
      Water quality is the single most important factor for fish health. Transparent water does not always mean safe water!
      
      • The Nitrogen Cycle: Fish produce ammonia through waste and respiration. Beneficial nitrifying bacteria in your filter convert toxic ammonia into nitrite, and then into less toxic nitrate.
      • Ammonia & Nitrite: Should ALWAYS be 0 ppm. Any reading above zero causes gill burns and stress.
      • Nitrate: Keep below 20 ppm through weekly 20–25% water changes.
      • Chlorine Removal: Always dose tap water conditioner (such as AquaSafe) to instantly neutralize chlorine and heavy metals before adding new water.
    `,
    tips: ['Test your water parameters weekly with 6-in-1 test strips.', 'Do not replace all filter sponges at once; rinse them in tank water to preserve bacteria.'],
  },
  {
    id: 'fish-food',
    title: 'Best Food & Feeding Schedule for Aquarium Fish',
    category: 'Fish Nutrition',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=600&q=80',
    summary: 'How much and how often to feed your fish: pellet sizes, spirulina flakes, freeze-dried treats, and avoiding overfeeding.',
    fullContent: `
      Overfeeding is the #1 cause of fish mortality and cloudy aquarium water.
      
      • The 2-Minute Rule: Feed only the amount of food your fish can completely consume within 2 minutes. Any uneaten food sinks to the bottom, rots, and causes toxic ammonia spikes.
      • Variety is Key: Alternate between high-protein micro pellets (for carnivores like Bettas), spirulina flakes (for livebearers and herbivores), and freeze-dried bloodworms as a weekend treat.
      • Sinking vs Floating: Bettas and surface feeders prefer floating pellets, while tetras, catfish, and plecos need slow-sinking or bottom wafers.
    `,
    tips: ['One or two small feedings a day is plenty.', 'Fast your fish one day a week to assist digestive regularity.'],
  },
  {
    id: 'cleaning-guide',
    title: 'Step-by-Step Aquarium Cleaning & Water Changes',
    category: 'Maintenance',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=600&q=80',
    summary: 'The proper routine for algae scraping, vacuuming gravel, partial water changes, and filter sponge maintenance.',
    fullContent: `
      Routine maintenance takes only 15 minutes a week and keeps your fish thriving for years:
      
      1. Scrape Glass: Use a magnetic cleaner or stainless steel blade to wipe down inner glass surfaces.
      2. Gravel Vacuum: Use a siphon tube to vacuum fish waste and debris trapped between gravel stones.
      3. 20% Water Change: Remove 20% to 25% of dirty aquarium water into a bucket. Never drain 100% of the water, as this destroys the biological balance.
      4. Match Water Temp: Ensure the new replacement water matches the aquarium temperature within 1°C.
      5. Condition Water: Add tap water conditioner to the bucket before refilling the aquarium.
    `,
    tips: ['Never wash biological filter ceramic rings in chlorinated tap water.', 'Unplug heaters and filters before draining water during cleaning.'],
  },
  {
    id: 'right-filter',
    title: 'Choosing the Right Filter: Canister vs HOB vs Sponge',
    category: 'Equipment',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80',
    summary: 'Which filter type matches your tank size, fish bioload, and aquascaping goals.',
    fullContent: `
      Selecting the proper filtration system depends on your tank volume and inhabitants:
      
      • Hang-On-Back (HOB) Filters: Perfect for small to medium tanks (20L to 80L). Slim, space-saving, quiet, and easy to clean.
      • External Canister Filters: The gold standard for tanks 100L and above. Massive biological media capacity, high flow rate, and crystal-clear water with optional UV sterilizers.
      • Sponge Filters: Ideal for shrimp breeding tanks, fry nurseries, and slow-swimming Betta fish. Powered gently by an air pump.
    `,
    tips: ['Aim for a filter flow rate that turns over your tank volume 4 to 6 times per hour.', 'Always keep biological media submerged in aquarium water during maintenance.'],
  },
  {
    id: 'betta-guide',
    title: "Beginner's Guide to Betta Fish Care",
    category: 'Species Care',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1534043464124-3be32fe00099?auto=format&fit=crop&w=600&q=80',
    summary: 'Debunking the bowl myth: why Bettas need warm filtered water, gentle flow, and live plants to flourish.',
    fullContent: `
      Betta splendens are intelligent and curious pets that deserve a proper habitat:
      
      • Say No to Tiny Bowls: Bettas require a minimum of 5 Gallons (20 Litres) of swimming space. Bowls cannot maintain stable temperatures or biological filtration.
      • Warm Water: Bettas are tropical fish native to Southeast Asia. They thrive in water temperatures between 24°C and 28°C (76°F - 82°F).
      • Gentle Flow: Because male Bettas have heavy, flowing fins, use a low-flow filter or sponge filter so they are not buffeted by strong currents.
      • Tank Mates: Keep male Bettas solitary from other male Bettas. Suitable tankmates include Nerite snails, Amano shrimp, or peaceful Harlequin Rasboras in larger tanks.
    `,
    tips: ['Bettas breathe air from the water surface through a labyrinth organ; always leave a small air gap under the tank lid.', 'Include broadleaf silk or live plants like Anubias for the Betta to rest on near the surface.'],
  },
];

export const QUICK_TIPS = [
  'Never wash aquarium gravel or filter media with household soap or bleach.',
  'Always float newly bought fish bags for 20 minutes to equalize water temperature.',
  'Change 20% to 25% of water weekly instead of doing rare 100% water changes.',
  'Keep aquarium lighting on for 6 to 8 hours daily to prevent excessive green algae.',
  'Do not add more than 2-3 fish at once to an uncycled or young aquarium.',
];
