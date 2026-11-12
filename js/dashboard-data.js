window.getStacklyDashboardTab = function (sectionKey, role, user) {
    var roleNames = { admin: 'Admin', chef: 'Chef', customer: 'Customer' };
    var userName = (user && user.name) || 'Member';
    var userEmail = (user && user.email) || 'member@stackly.io';
    var activeRoleLabel = roleNames[role] || 'Customer';

    var sections = {
        overview: {
            title: 'Overview',
            subtitle: {
                admin: 'Executive Snapshot · Chinnathirupathi, Salem',
                chef: 'Live Culinary Command · Main Pass',
                customer: 'Your Stackly Dining & Loyalty Hub'
            },
            actionText: { admin: 'Add Branch Report', chef: 'Open Prep Sheet', customer: 'New Reservation' },
            kpis: {
                admin: [
                    ['Daily Revenue', '$14,820', '+18.4% vs last week'],
                    ['Active Orders', '48', '12 espresso · 36 dine-in'],
                    ['Table Occupancy', '91%', '64 of 70 seats reserved'],
                    ['Guest Rating', '4.9 / 5', '22,000+ verified reviews']
                ],
                chef: [
                    ['Open Tickets', '19', 'Avg fire time: 11 mins'],
                    ['Tasting Menus', '14', '6-course chef pairing tonight'],
                    ['Prep Complete', '94%', 'Sauces & stocks finished'],
                    ['Pastry Batch', '42', 'Fresh croissants warm']
                ],
                customer: [
                    ['Loyalty Points', '2,450 pts', 'Gold Tier · 2 free drinks'],
                    ['Next Booking', 'Fri 7:30 PM', 'Window seat · 4 guests'],
                    ['Saved Favorites', '7 Items', 'Pour-Over & Plum Crumble'],
                    ['Gift Credit', '$85.00', 'Valid dine-in & takeaway']
                ]
            },
            headers: ['Ref ID', 'Summary', 'Status', 'Metric', 'Action'],
            rows: {
                admin: [
                    ['#OV-901', 'Morning Espresso Rush · 142 cups', 'Optimal', '$1,120.00', 'View Breakdown'],
                    ['#OV-902', 'Private Dining Room · VIP Booking', 'Confirmed', '16 Guests', 'Open Brief'],
                    ['#OV-903', 'Dinner Service Prep · Main Kitchen', 'On Track', '100% Ready', 'Inspect'],
                    ['#OV-904', 'Roastery Batch #204 Quality Check', 'Passed', '98 Score', 'Audit Log']
                ],
                chef: [
                    ['#CH-101', 'Evening Tasting Mise en Place', 'Ready', '14 Covers', 'View List'],
                    ['#CH-102', 'Herb-Crusted Sea Bass Station', 'Prepped', '28 Portions', 'Check Line'],
                    ['#CH-103', 'Gluten-Free Dough Fermentation', 'Active', '18 Bases', 'Timer Log'],
                    ['#CH-104', 'Pastry Oven Batch #3', 'Baking', '8m Left', 'Open Timer']
                ],
                customer: [
                    ['#CU-301', 'Friday Dinner Reservation Confirmed', 'Confirmed', '7:30 PM', 'View Pass'],
                    ['#CU-302', 'Reward Bonus Earned · Pour-Over', 'Credited', '+180 pts', 'Redeem'],
                    ['#CU-303', 'Chef Myra Tasting Invitation', 'VIP Invite', 'May 24', 'RSVP'],
                    ['#CU-304', 'Last Visit Receipt · Brunch', 'Completed', '$64.00', 'Invoice']
                ]
            },
            sideTitle: 'Performance Targets',
            sideAction: 'Full Audit',
            bars: [
                ['Service Speed Goal', '92%'],
                ['Dine-In Satisfaction', '96%'],
                ['Specialty Beverage Share', '74%']
            ],
            sideButtons: ['Daily Summary', 'Share KPI']
        },

        orders: {
            title: 'Orders & Queue',
            subtitle: {
                admin: 'Live Checkout & Dining Fulfillment',
                chef: 'Real-Time Kitchen Display Queue',
                customer: 'Your Recent Orders & Takeaway Picks'
            },
            actionText: { admin: 'Create Manual Order', chef: 'Prioritize Ticket', customer: 'Order Takeaway' },
            kpis: {
                admin: [
                    ['Orders Today', '214', '+24 more than yesterday'],
                    ['Express Pickups', '68', 'Avg handoff: 6 mins'],
                    ['Dine-In Checks', '146', 'Avg check: $72.50'],
                    ['Queue Wait', '8 mins', 'Target <= 12 mins']
                ],
                chef: [
                    ['Firing Now', '8', 'Grill & wood-fired oven'],
                    ['Ready at Pass', '5', 'Waiting for runner pickup'],
                    ['Allergy Alerts', '3', 'Nut-free & celiac tagged'],
                    ['Avg Ticket Time', '11 mins', 'Peak dinner window']
                ],
                customer: [
                    ['Total Orders', '29', 'Since joining Stackly'],
                    ['Active Pickup', 'None', 'Order coffee ahead anytime'],
                    ['Favorite Item', 'Flat White', 'Ordered 14 times'],
                    ['Saved Time', '3.5 hrs', 'With skip-the-line pickup']
                ]
            },
            headers: ['Order #', 'Items & Notes', 'Stage', 'Total / Time', 'Action'],
            rows: {
                admin: [
                    ['#ORD-5510', '2x Truffle Rigatoni + 2x Mocktails', 'Served', '$86.00', 'Receipt'],
                    ['#ORD-5511', 'Coffee Box (10 Cups) · Chinnathirupathi', 'Out for Pickup', '$54.00', 'Track'],
                    ['#ORD-5512', 'Wood-Fired Sea Bass + Chardonnay', 'Cooking', '$118.00', 'View Order'],
                    ['#ORD-5513', 'Artisan Pastry Box + 4x Flat White', 'Queued', '$49.50', 'Dispatch']
                ],
                chef: [
                    ['#KDS-812', 'Table 04 · Wagyu Ribeye (Med-Rare)', 'Firing', '6m Elapsed', 'Bump'],
                    ['#KDS-813', 'Table 11 · Crispy Chicken Burger x3', 'Plating', '9m Elapsed', 'Serve'],
                    ['#KDS-814', 'Table 07 · Vegan Roast Veg Pizza', 'In Oven', '4m Elapsed', 'Hold'],
                    ['#KDS-815', 'Bar · Smoked Cheese Plate + Olives', 'Queued', '1m Elapsed', 'Fire']
                ],
                customer: [
                    ['#MY-884', 'Ethiopian Pour-Over + Plum Tart', 'Delivered', '$22.50', 'Reorder'],
                    ['#MY-879', 'Herb Grilled Chicken Pizza', 'Completed', '$26.00', 'Invoice'],
                    ['#MY-862', 'Double Espresso + Croissant Trio', 'Completed', '$19.00', 'Reorder'],
                    ['#MY-845', 'Weekend Brunch Tasting for 2', 'Completed', '$78.00', 'Review']
                ]
            },
            sideTitle: 'Order Channels',
            sideAction: 'Live Monitor',
            bars: [
                ['Table Service (Dine-In)', '68%'],
                ['Express Counter Pickup', '22%'],
                ['Catering & Corporate Boxes', '10%']
            ],
            sideButtons: ['Print Queue', 'Clear Done']
        },

        menu: {
            title: 'Menu & Specials',
            subtitle: {
                admin: 'Active Catalog Pricing & Categories',
                chef: 'Chef Tasting Dishes & Prep Status',
                customer: 'Curated Seasonal Dishes & Drinks'
            },
            actionText: { admin: 'Add Menu Dish', chef: 'Publish Special', customer: 'Save to Favorites' },
            kpis: {
                admin: [
                    ['Published Dishes', '38', 'Across 5 menu categories'],
                    ['Top Margin Item', 'Signature Roast', '76% gross margin'],
                    ['Sold Out Items', '1', 'Wild Mushroom Tart (restocking)'],
                    ['Seasonal Specials', '6', 'Chef Myra Autumn Selection']
                ],
                chef: [
                    ['Chef Specials', '6', 'Updated every Friday'],
                    ['Allergen Tagged', '100%', 'GF / Vegan labels verified'],
                    ['High-Demand Dish', 'Sea Bass', '34 plated tonight'],
                    ['Dessert Stock', '26', 'Warm tiramisu & crumbles']
                ],
                customer: [
                    ['Seasonal Specials', '6 New', 'Autumn Plum & Roast Series'],
                    ['Chef Recommended', '4 Picks', 'Pair with single-origin'],
                    ['Vegan Friendly', '11 Items', 'Artisan breads & salads'],
                    ['Coffee Blends', '8 Beans', 'Roasted weekly in-house']
                ]
            },
            headers: ['Code', 'Dish / Beverage', 'Availability', 'Price', 'Action'],
            rows: {
                admin: [
                    ['#MN-101', 'Chicken Burger · Brioche & Herb Slaw', 'In Stock', '$8.75', 'Edit Price'],
                    ['#MN-102', 'Herb-Crusted Sea Bass · Saffron Jus', 'Limited (8)', '$28.50', 'Manage'],
                    ['#MN-103', 'Ethiopian Yirgacheffe Pour-Over', 'Available', '$6.25', 'Edit Item'],
                    ['#MN-104', 'Autumn Plum Crumble · Vanilla Bean', 'Featured', '$11.50', 'Promote']
                ],
                chef: [
                    ['#SP-201', 'Wood-Fired Ribeye · Smoked Marrow', 'Active', '12 Left', 'Update Qty'],
                    ['#SP-202', 'Truffle Wild Mushroom Risotto', 'Active', '16 Left', 'Recipe Card'],
                    ['#SP-203', 'Matcha White Chocolate Tart', 'Low (4)', '4 Left', '86 Item'],
                    ['#SP-204', 'Roasted Beet & Goat Cheese Salad', 'Ready', 'Unlimited', 'Check Prep']
                ],
                customer: [
                    ['#FAV-01', 'Caramelized Fig & Ricotta Toast', 'Brunch Special', '$16.50', 'Order Now'],
                    ['#FAV-02', 'Single-Origin Cold Brew Tonic', 'Chilled Craft', '$7.00', 'Add Favorite'],
                    ['#FAV-03', 'Wood-Fired Margherita Artisan', 'All Day', '$19.50', 'Customize'],
                    ['#FAV-04', 'Warm Dark Chocolate Fondant', 'Evening Dessert', '$13.00', 'Reserve']
                ]
            },
            sideTitle: 'Menu Category Mix',
            sideAction: 'Pricing Rules',
            bars: [
                ['Specialty Coffees & Drinks', '45%'],
                ['Wood-Fired Main Dishes', '35%'],
                ['Pastries & Desserts', '20%']
            ],
            sideButtons: ['Export Menu CSV', 'Sync POS']
        },

        reservations: {
            title: 'Reservations',
            subtitle: {
                admin: 'Floor Plan & Tonight Booking Schedule',
                chef: 'Upcoming Covers & VIP Dietary Alerts',
                customer: 'Manage Your Upcoming Table Bookings'
            },
            actionText: { admin: 'Book Walk-In', chef: 'Export Dietary Sheet', customer: 'New Reservation' },
            kpis: {
                admin: [
                    ['Total Covers Tonight', '118', 'Breakfast, lunch & dinner'],
                    ['Window Tables Left', '2', '9:00 PM late slot open'],
                    ['Private Room', 'Booked', 'Salem Suite · 18 guests'],
                    ['No-Show Rate', '1.4%', 'SMS reminders active']
                ],
                chef: [
                    ['First Seating (6 PM)', '44 Guests', '2 tasting menus pre-booked'],
                    ['Second Seating (8 PM)', '56 Guests', '3 celiac · 2 vegan notes'],
                    ['VIP Tables', '4 Tables', 'Chef amuse-bouche queued'],
                    ['Large Party', '12 Guests', 'Shared feast platter']
                ],
                customer: [
                    ['Confirmed Bookings', '1 Active', 'Fri 7:30 PM · 4 Guests'],
                    ['Preferred Area', 'Window', 'Quiet corner saved'],
                    ['Past Visits', '12', 'Chinnathirupathi, Salem'],
                    ['Instant Rebook', 'Enabled', '1-tap weekend slots']
                ]
            },
            headers: ['Booking ID', 'Guest / Table', 'Status', 'Date & Slot', 'Action'],
            rows: {
                admin: [
                    ['#RS-701', 'Elena Vance · Private Room (16)', 'Confirmed', 'Tonight 7:00 PM', 'Assign Staff'],
                    ['#RS-702', 'Marcus Thorne · Window #04 (2)', 'Seated', 'Tonight 6:30 PM', 'Check Table'],
                    ['#RS-703', 'Priya Nair · Booth #09 (6)', 'Pending', 'Sat 8:00 PM', 'Approve'],
                    ['#RS-704', 'Daniel Brooks · Patio #02 (4)', 'Waitlist', 'Sun 11:30 AM', 'Notify']
                ],
                chef: [
                    ['#KRS-12', 'Table 14 (16 pax) · Custom 5-Course', 'Prep Alert', '7:00 PM', 'Print Menu'],
                    ['#KRS-13', 'Table 04 (2 pax) · Nut Allergy', 'Flagged', '6:30 PM', 'Kitchen Note'],
                    ['#KRS-14', 'Table 09 (6 pax) · Anniversary Cake', 'Ready', '8:00 PM', 'Pastry Ping'],
                    ['#KRS-15', 'Table 06 (4 pax) · Vegetarian Tasting', 'Confirmed', '8:15 PM', 'Review']
                ],
                customer: [
                    ['#MYR-41', 'Window Table · 4 Guests', 'Upcoming', 'Fri · 7:30 PM', 'Modify Slot'],
                    ['#MYR-28', 'Patio Lounge · 2 Guests', 'Completed', 'Apr 19 · 11 AM', 'Book Again'],
                    ['#MYR-15', 'Chef Counter · 2 Guests', 'Completed', 'Mar 08 · 8 PM', 'Leave Note'],
                    ['#MYR-09', 'Private Tasting · 6 Guests', 'Completed', 'Feb 14 · 7 PM', 'Download Pass']
                ]
            },
            sideTitle: 'Seating Area Split',
            sideAction: 'Floor Map',
            bars: [
                ['Main Dining Hall', '94%'],
                ['Window Espresso Lounge', '88%'],
                ['Private Suite', '100%']
            ],
            sideButtons: ['SMS Alerts', 'Waitlist Rules']
        },

        team: {
            title: 'Staff & Chefs',
            subtitle: {
                admin: 'Active Roster & Shift Allocations',
                chef: 'Brigade Stations & Tonight Crew',
                customer: 'Meet the Culinary Team Hosting You'
            },
            actionText: { admin: 'Schedule New Shift', chef: 'Update Lineup', customer: 'Message Chef' },
            kpis: {
                admin: [
                    ['On Duty Now', '18 Staff', '6 kitchen · 8 FOH · 4 baristas'],
                    ['Head Chef', 'Fynley W.', 'Leading evening pass'],
                    ['Barista Lead', 'Robyn P.', 'Roastery & pour-over bar'],
                    ['Shift Overtime', '0 hrs', 'Fully balanced schedule']
                ],
                chef: [
                    ['Brigade Active', '8 Chefs', 'Full station coverage'],
                    ['Grill Station', 'Fynley W.', 'Senior Sous on pass'],
                    ['Pastry Station', 'Aysha S.', '80 desserts prepped'],
                    ['Sauce & Larder', 'Myra W.', 'Stock reduction done']
                ],
                customer: [
                    ['Executive Chef', 'Fynley W.', '18 years culinary craft'],
                    ['Pastry Chef', 'Aysha S.', 'Artisan tarts & breads'],
                    ['Head Roaster', 'Robyn P.', 'Single-origin specialist'],
                    ['Host Team', '4 Stars', 'Dedicated concierge']
                ]
            },
            headers: ['Staff ID', 'Member & Specialty', 'Status', 'Station / Shift', 'Action'],
            rows: {
                admin: [
                    ['#TM-01', 'Chef Fynley Wilkinson · Culinary Director', 'On Shift', '12 PM - 10 PM', 'Roster'],
                    ['#TM-02', 'Chef Myra Welsh · Sous Chef', 'On Shift', '11 AM - 9 PM', 'Edit Shift'],
                    ['#TM-03', 'Chef Aysha Shepard · Head Pastry', 'Morning Done', '6 AM - 3 PM', 'Timesheet'],
                    ['#TM-04', 'Chef Robyn Peel · Head Roaster', 'On Shift', '8 AM - 5 PM', 'Manage']
                ],
                chef: [
                    ['#ST-01', 'Fynley Wilkinson · Hot Pass & Expedite', 'Lead', 'Evening Line', 'Checklist'],
                    ['#ST-02', 'Myra Welsh · Wood-Fired & Sauces', 'Active', 'Grill & Oven', 'Notes'],
                    ['#ST-03', 'Aysha Shepard · Pastry & Breads', 'Prepped', 'Bakery Counter', 'Handover'],
                    ['#ST-04', 'Liam OConnor · Cold Garde-Manger', 'Active', 'Salad Station', 'Inspect']
                ],
                customer: [
                    ['#CF-01', 'Chef Fynley Wilkinson', 'Hosting Tonight', 'Tasting Menus', 'View Bio'],
                    ['#CF-02', 'Chef Myra Welsh', 'Featured Menu', 'Autumn Harvest', 'Book Counter'],
                    ['#CF-03', 'Chef Aysha Shepard', 'Daily Bake', 'Morning Pastries', 'See Specials'],
                    ['#CF-04', 'Chef Robyn Peel', 'Brew Bar', 'Ethiopian Roast', 'Reserve Tasting']
                ]
            },
            sideTitle: 'Department Coverage',
            sideAction: 'Payroll View',
            bars: [
                ['Kitchen Culinary Brigade', '100%'],
                ['Barista & Beverage Bar', '95%'],
                ['Front-of-House Service', '90%']
            ],
            sideButtons: ['Swap Request', 'Attendance']
        },

        analytics: {
            title: 'Analytics',
            subtitle: {
                admin: 'Monthly Revenue Growth & Margin Report',
                chef: 'Dish Popularity & Prep Efficiency Metrics',
                customer: 'Your Yearly Dining & Coffee Insights'
            },
            actionText: { admin: 'Generate Monthly Report', chef: 'Export Dish Stats', customer: 'Download Summary' },
            kpis: {
                admin: [
                    ['Monthly Revenue', '$384,200', '+22.6% YoY growth'],
                    ['Avg Order Value', '$74.80', '+$6.40 vs last quarter'],
                    ['Peak Hour', '7:30 PM', '98% kitchen throughput'],
                    ['Repeat Guests', '64%', 'Strong loyalty retention']
                ],
                chef: [
                    ['Fastest Dish', 'Flatbread (7m)', 'High margin & throughput'],
                    ['Top Seller', 'Sea Bass (410)', 'Sold this month'],
                    ['Waste Reduction', '-14.2%', 'Smart prep forecasting'],
                    ['Quality Score', '99.1%', 'Zero returned plates']
                ],
                customer: [
                    ['Visits This Year', '24', 'Most visited: Fri mornings'],
                    ['Coffees Enjoyed', '38 Cups', 'Top roast: Ethiopian Yirga'],
                    ['Points Redeemed', '1,600 pts', 'Saved $72 on orders'],
                    ['Favorite Time', '10:30 AM', 'Espresso & sourdough']
                ]
            },
            headers: ['Report ID', 'Segment / Metric', 'Trend', 'Figure', 'Action'],
            rows: {
                admin: [
                    ['#AN-301', 'Weekend Dinner Tasting Revenue', '+26.4%', '$148,900', 'Drilldown'],
                    ['#AN-302', 'Specialty Espresso & Cold Brew Sales', '+19.1%', '$89,400', 'Compare'],
                    ['#AN-303', 'Corporate Catering Contracts', '+31.0%', '$62,150', 'Open File'],
                    ['#AN-304', 'Desserts & Bakery Takeaway', '+12.8%', '$41,200', 'Analyze']
                ],
                chef: [
                    ['#KA-11', 'Wood-Fired Grill Efficiency', '+11%', '9.4m Avg Fire', 'Details'],
                    ['#KA-12', 'Seasonal Tasting Attachment Rate', '+18%', '32% Diners', 'Breakdown'],
                    ['#KA-13', 'Morning Pastry Sell-Through', '+9%', '97% Sold', 'Adjust Batch'],
                    ['#KA-14', 'Ingredient Yield Ratio', '+4.5%', '93.8% Yield', 'View Waste']
                ],
                customer: [
                    ['#UA-01', 'Morning Espresso Habits', '14 Visits', '$142 Spent', 'Explore Beans'],
                    ['#UA-02', 'Weekend Dinner Gatherings', '6 Visits', '$410 Spent', 'See Receipts'],
                    ['#UA-03', 'Loyalty Rewards Unlocked', '4 Vouchers', '$72 Saved', 'Claim Perk'],
                    ['#UA-04', 'Dietary Match Score', '98% Match', '11 GF Options', 'Preferences']
                ]
            },
            sideTitle: 'Quarterly Targets',
            sideAction: 'Forecast',
            bars: [
                ['Q2 Revenue Goal', '89%'],
                ['Customer Retention Target', '93%'],
                ['Cost Control Benchmark', '84%']
            ],
            sideButtons: ['CSV Export', 'Compare YoY']
        },

        inventory: {
            title: 'Inventory',
            subtitle: {
                admin: 'Roastery Stock, Pantry & Supplier Orders',
                chef: 'Live Kitchen Ingredients & Par Levels',
                customer: 'In-House Roastery Bean Availability'
            },
            actionText: { admin: 'Place Supplier Order', chef: 'Flag Low Stock', customer: 'Pre-Order Beans' },
            kpis: {
                admin: [
                    ['Tracked SKUs', '142', 'Beans, produce, dairy & dry goods'],
                    ['Low Stock Alerts', '3', 'Reorder queued for tomorrow'],
                    ['Coffee Bean Stock', '185 kg', '4 single-origin harvests'],
                    ['Next Delivery', 'Thu 6:30 AM', 'Tamil Nadu Artisan Farms']
                ],
                chef: [
                    ['Fresh Produce Par', '96%', 'Morning harvest delivered'],
                    ['Protein Cold Room', '42 kg', 'Aged wagyu & line fish'],
                    ['Urgent Low Item', 'Saffron Threads', '2 jars remaining'],
                    ['Sourdough Flour', '90 kg', 'Organic stone-milled']
                ],
                customer: [
                    ['Fresh Roast Lots', '4 Origins', 'Roasted every Tuesday'],
                    ['Ethiopia 250g Bag', 'In Stock', 'Floral bergamot & cocoa'],
                    ['Colombia Decaf Bag', 'In Stock', 'Swiss-water sugarcane'],
                    ['Cold Brew Bottles', '14 Left', 'Ready in chillers']
                ]
            },
            headers: ['SKU', 'Ingredient / Roast Batch', 'Stock Status', 'Quantity', 'Action'],
            rows: {
                admin: [
                    ['#INV-012', 'Ethiopian Yirgacheffe Green & Roasted', 'Healthy', '64 kg', 'Manage'],
                    ['#INV-048', 'Organic Barista Oat & Whole Milk', 'Low Stock', '18 Cartons', 'Reorder'],
                    ['#INV-071', 'Tasmanian Atlantic Sea Bass Fillet', 'Optimal', '24 kg', 'Inspect'],
                    ['#INV-095', 'Belgian 70% Dark Couverture', 'Low Stock', '5.5 kg', 'Approve PO']
                ],
                chef: [
                    ['#KIN-11', 'Grass-Fed Wagyu Striploin Cut', 'Ready', '18 kg', 'Portion Log'],
                    ['#KIN-19', 'Black Winter Truffle Paste', 'Low (3 Jars)', '1.2 kg', 'Request PO'],
                    ['#KIN-24', 'Fresh Meyer Lemons & Garden Mint', 'Fresh Today', '14 kg', 'Check Fridge'],
                    ['#KIN-32', 'San Marzano Crushed Tomatoes', 'Stocked', '36 Tins', 'Verify Par']
                ],
                customer: [
                    ['#BAG-01', 'Stackly House Espresso Blend (250g)', 'In Stock', '$18.00', 'Buy Bag'],
                    ['#BAG-02', 'Ethiopia Guji Filter Roast (250g)', 'Fresh Roast', '$21.00', 'Buy Bag'],
                    ['#BAG-03', 'Seasonal Autumn Spice Syrup', 'Limited (6)', '$14.50', 'Reserve'],
                    ['#BAG-04', 'Artisan Honey & Brioche Hamper', 'Available', '$38.00', 'Gift Order']
                ]
            },
            sideTitle: 'Supplier Fill Rates',
            sideAction: 'Vendors',
            bars: [
                ['Green Coffee Roastery', '98%'],
                ['Fresh Seafood & Meat', '94%'],
                ['Dairy & Bakery Flour', '87%']
            ],
            sideButtons: ['Stocktake Sheet', 'Auto-Par Rules']
        },

        reviews: {
            title: 'Reviews',
            subtitle: {
                admin: 'Google, Trustpilot & Guest Moderation',
                chef: 'Dish Feedback & Dining Room Praise',
                customer: 'Your Reviews & Community Ratings'
            },
            actionText: { admin: 'Respond to All', chef: 'Share with Kitchen', customer: 'Write a Review' },
            kpis: {
                admin: [
                    ['Overall Score', '4.9 / 5', '22,410 verified reviews'],
                    ['Google Rating', '4.9 ★', '14,820 reviews'],
                    ['Trustpilot Score', '4.8 ★', '7,590 reviews'],
                    ['Response Rate', '99%', 'Within 4 hours avg']
                ],
                chef: [
                    ['Dish Praise Rate', '97%', 'Tiramisu & Sea Bass top-cited'],
                    ['Plating Mentions', '1,420+', '"Artisan & appetizing"'],
                    ['Latest Compliment', '1 hr ago', 'Private dining 5-course'],
                    ['Dietary Thanks', '100%', 'Zero cross-contact notes']
                ],
                customer: [
                    ['Reviews Posted', '5 Reviews', 'All verified 5-star'],
                    ['Helpful Votes', '42', 'Thanked by guests'],
                    ['Bonus Points', '+500 pts', 'Earned for photo reviews'],
                    ['Latest Review', 'Feb 2026', 'Anniversary Dinner']
                ]
            },
            headers: ['Ref', 'Reviewer & Excerpt', 'Platform', 'Rating', 'Action'],
            rows: {
                admin: [
                    ['#RV-901', 'Elena Vance · "Sommelier pairings wowed our guests"', 'Google', '5.0 ★', 'Reply'],
                    ['#RV-902', 'Marcus Thorne · "Calm acoustics & buttery croissants"', 'Trustpilot', '5.0 ★', 'Feature'],
                    ['#RV-903', 'Priya Nair · "Warmest dining room in town"', 'Google', '5.0 ★', 'Thank'],
                    ['#RV-904', 'Daniel Brooks · "Outstanding GF wood-fired flatbreads"', 'Trustpilot', '5.0 ★', 'Pin Top']
                ],
                chef: [
                    ['#CRV-41', 'Hannah Kim · "Custom 20-guest tasting pacing was spot-on"', 'Google', '5.0 ★', 'Kudos'],
                    ['#CRV-42', 'Oliver Grant · "Truffle rigatoni perfection"', 'Trustpilot', '5.0 ★', 'View Plate'],
                    ['#CRV-43', 'Karyn Deely · "Quality ingredients shine in every dish"', 'Google', '5.0 ★', 'Archive'],
                    ['#CRV-44', 'Jenna Smith · "Rich smooth morning coffee"', 'Direct', '5.0 ★', 'Notify Bar']
                ],
                customer: [
                    ['#MYRV-5', 'Anniversary Tiramisu Surprise', 'Google', '5.0 ★', 'Edit Post'],
                    ['#MYRV-4', 'Morning Ethiopian Pour-Over', 'Trustpilot', '5.0 ★', 'Share'],
                    ['#MYRV-3', 'Sunday Brunch Flatbreads', 'Google', '5.0 ★', 'View Live'],
                    ['#MYRV-2', 'Private Room Tasting Event', 'Direct', '5.0 ★', 'Receipt']
                ]
            },
            sideTitle: 'Sentiment Breakdown',
            sideAction: 'Moderation',
            bars: [
                ['Food & Coffee Quality', '98%'],
                ['Warmth & Hospitality', '96%'],
                ['Ambiance & Music', '94%']
            ],
            sideButtons: ['Filter Low', 'Embed Widget']
        },

        messages: {
            title: 'Messages',
            subtitle: {
                admin: 'Contact Form Leads & Catering Inquiries',
                chef: 'Special Dietary Requests & Prep Notes',
                customer: 'Concierge Replies & Event Updates'
            },
            actionText: { admin: 'Compose Broadcast', chef: 'Send Kitchen Note', customer: 'New Inquiry' },
            kpis: {
                admin: [
                    ['Unread Inquiries', '6', '2 private event requests'],
                    ['Corporate Leads', '4 New', 'Salem local offices'],
                    ['Avg Reply Time', '18 mins', 'Live concierge inbox'],
                    ['Resolved Today', '27', '100% SLA satisfied']
                ],
                chef: [
                    ['Dietary Alerts', '3 Tonight', 'Table 04, 09 & Private Room'],
                    ['Supplier Messages', '2', 'Fresh truffle arrival confirmed'],
                    ['VIP Seating Notes', '4', 'Complimentary amuse-bouche'],
                    ['Read Receipts', '100%', 'All stations acknowledged']
                ],
                customer: [
                    ['Inbox Threads', '2 Open', 'Reservation & tasting inquiry'],
                    ['Concierge Status', 'Online', 'Replies within 20 mins'],
                    ['Event Invites', '1 New', 'Roastery Cupping Night'],
                    ['Email Alerts', 'Enabled', 'Booking & reward notices']
                ]
            },
            headers: ['Msg ID', 'Thread & Contact', 'Priority', 'Received', 'Action'],
            rows: {
                admin: [
                    ['#MSG-410', 'Corporate Event · 24 Guests Tasting Menu', 'High', '14 mins ago', 'Reply'],
                    ['#MSG-411', 'Dietary Inquiry · Gluten & Dairy Free Menu', 'Normal', '42 mins ago', 'Open'],
                    ['#MSG-412', 'Wholesale Coffee Beans Partnership Request', 'Follow-Up', '2 hrs ago', 'Assign'],
                    ['#MSG-413', 'Photographer Press Shoot Inquiry', 'Normal', 'Yesterday', 'Archive']
                ],
                chef: [
                    ['#KMG-81', 'Front Desk: Table 04 Severe Peanut Allergy', 'Urgent', '10 mins ago', 'Acknowledge'],
                    ['#KMG-82', 'Pastry: Confirm 20 Mini Crumbles for Event', 'High', '35 mins ago', 'Confirm'],
                    ['#KMG-83', 'Roastery: New Gesha Micro-Lot Ready to Taste', 'Info', '3 hrs ago', 'Schedule'],
                    ['#KMG-84', 'Maintenance: Pizza Oven Calibration Passed', 'Done', 'Yesterday', 'View Log']
                ],
                customer: [
                    ['#CMG-19', 'Concierge: Window Table #04 Confirmed for Fri', 'Confirmed', '1 hr ago', 'Reply'],
                    ['#CMG-18', 'VIP Invite: Sunday Roastery Cupping Tasting', 'Invite', '2 days ago', 'Claim Seat'],
                    ['#CMG-14', 'Support: Gift Voucher Balance Applied ($85)', 'Resolved', 'Last week', 'View Receipt'],
                    ['#CMG-11', 'Chef Greeting: Thank You for Your Review', 'Read', 'Feb 2026', 'Archive']
                ]
            },
            sideTitle: 'Response SLA Health',
            sideAction: 'Templates',
            bars: [
                ['Under 30m First Response', '95%'],
                ['Booking Inquiry Resolution', '99%'],
                ['Event Quote Turnaround', '88%']
            ],
            sideButtons: ['Mark All Read', 'Auto-Reply']
        },

        settings: {
            title: 'Settings',
            subtitle: {
                admin: 'Account Security & Branch Preferences',
                chef: 'Kitchen Display & Alert Preferences',
                customer: 'Profile Details & Dietary Preferences'
            },
            actionText: { admin: 'Save All Settings', chef: 'Save Station Rules', customer: 'Save Profile' },
            kpis: {
                admin: [
                    ['Signed-In User', userName, userEmail],
                    ['Access Tier', activeRoleLabel, 'Full branch permissions'],
                    ['2FA Security', 'Protected', 'Strong password verified'],
                    ['Branch Timezone', 'Salem, Tamil Nadu', 'IST · UTC+5:30']
                ],
                chef: [
                    ['Chef Profile', userName, userEmail],
                    ['Station Tier', activeRoleLabel, 'KDS & menu control'],
                    ['Ticket Chime', 'Active', 'Audio & visual alerts'],
                    ['Password Check', 'Strong', '8+ chars + symbols']
                ],
                customer: [
                    ['Member Name', userName, userEmail],
                    ['Account Tier', activeRoleLabel, 'Gold Loyalty active'],
                    ['Preferred Roast', 'Single-Origin', 'Medium-light filter'],
                    ['Security', 'Verified', 'Strong password policy']
                ]
            },
            headers: ['Setting', 'Current Configuration', 'State', 'Updated', 'Action'],
            rows: {
                admin: [
                    ['Account Name', userName, 'Active', 'Verified Today', 'Edit Name'],
                    ['Login Email', userEmail, 'Verified', 'Primary Login', 'Change Email'],
                    ['Role Access Level', activeRoleLabel + ' Dashboard', 'Active', 'Session Live', 'Permissions'],
                    ['Booking SMS & Email Alerts', 'Instant Notification', 'Enabled', 'Automated', 'Configure']
                ],
                chef: [
                    ['Chef Display Name', userName, 'Active', 'On Pass', 'Edit Profile'],
                    ['Login Email', userEmail, 'Verified', 'Primary Login', 'Update'],
                    ['Allergy Alert Banner', 'High-Contrast Red/Gold Pin', 'Enabled', 'Always On', 'Customize'],
                    ['Prep Cutoff Reminder', 'Daily at 4:00 PM', 'Scheduled', 'Active', 'Change Time']
                ],
                customer: [
                    ['Profile Name', userName, 'Active', 'Verified', 'Edit Profile'],
                    ['Member Email', userEmail, 'Verified', 'Receipts Enabled', 'Change Email'],
                    ['Dietary Preference Note', 'Saved with bookings automatically', 'Ready', 'Optional', 'Edit Note'],
                    ['Loyalty Reward Alerts', 'SMS & Email Notifications', 'Subscribed', 'Active', 'Manage']
                ]
            },
            sideTitle: 'Security & Preferences',
            sideAction: 'Audit Log',
            bars: [
                ['Profile Completeness', '100%'],
                ['Password Strength Score', '100%'],
                ['Notification Sync', '90%']
            ],
            sideButtons: ['Reset Password', 'Privacy Data']
        }
    };

    var sec = sections[sectionKey] || sections.overview;
    return {
        title: sec.title,
        subtitle: sec.subtitle[role] || sec.subtitle.customer,
        actionText: sec.actionText[role] || sec.actionText.customer,
        kpis: sec.kpis[role] || sec.kpis.customer,
        headers: sec.headers,
        rows: sec.rows[role] || sec.rows.customer,
        sideTitle: sec.sideTitle,
        sideAction: sec.sideAction,
        bars: sec.bars,
        sideButtons: sec.sideButtons
    };
};

