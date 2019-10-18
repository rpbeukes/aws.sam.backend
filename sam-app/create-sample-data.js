const cuid = require('cuid');

var data = 
[
    {
      id: cuid(),
      name: 'All terrain vehicle - type 1',
      description: 'The type 1 vehicle has good all-round capability, internal seating for 6 plus 2 external positions.',
      category: 'vehicles',
      count: 7
    },
    {
      id: cuid(),
      name: 'All terrain vehicle - type 4',
      description: 'The type 4 vehicle is larger than the type 1, with additional defensive capability, and internal seating for 8 plus 2 external positions.',
      category: 'vehicles',
      count: 2
    },
    {
      id: cuid(),
      name: 'Transporter - personnel fixtures',
      description: 'Basic bus-type transporter suitable for carrying 24 personnel plus personal kits.',
      category: 'vehicles',
      count: 3
    },
    {
      id: cuid(),
      name: 'Transporter - equipment fixtures',
      description: 'Equipment transporter, maximum capacity 5T.',
      category: 'vehicles',
      count: 4
    },
    {
      id: cuid(),
      name: 'Transporter - combination fixtures',
      description: 'Transporter with dual-purpose equipment fittings, suitable for 12 personnel plus a large equipment bay.',
      category: 'vehicles',
      count: 1
    },
    {
      id: cuid(),
      name: 'Diesel - 50L can',
      description: '50L can of diesel fuel suitable for all ATVs and transporters.',
      category: 'fuel',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Rifle - standard issue, fully automatic',
      description: 'Fully-automatic rifle using standard ammunition.',
      category: 'firearms',
      count: 100
    },
    {
      id: cuid(),
      name: 'Rifle - sniper',
      description: 'Bolt-action rifle with enhanced scope; requires standard ammunition.',
      category: 'firearms',
      count: 10
    },
    {
      id: cuid(),
      name: 'Sidearm - semi-automatic pistol, standard issue',
      description: 'Officer\'s sidearm',
      category: 'firearms',
      count: 20
    },
    {
      id: cuid(),
      name: 'Machinegun - heavy duty, .50 calibre, belt-fed',
      description: 'Squad machinegun, belt-fed.',
      category: 'firearms',
      count: 3
    },
    {
      id: cuid(),
      name: 'Ammunition - standard clip',
      description: 'Standard clip of ammunition for rifles and sidearms.',
      category: 'ammunition',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Ammunition - standard clip, 10% tracers (blue)',
      description: 'Standard clip of ammunition for rifles and sidearms, with 1 out of 10 rounds as blue tracers.',
      category: 'ammunition',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Ammunition - .50 calibre belt',
      description: 'Ammunition for belt-fed machineguns, in metal case.',
      category: 'ammunition',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Ammunition - .50 calibre magazine, 10% tracers (red)',
      description: 'Ammunition for belt-fed machineguns, with 1 out of 10 rounds as red tracers, in metal case',
      category: 'ammunition',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Ammunition - .50 calibre magazine, 5% tracers (green)',
      description: 'Ammunition for belt-fed machineguns, with 1 out of 20 rounds as green tracers, in metal case',
      category: 'ammunition',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Body armour - vest',
      description: 'Standard body armour, covers the torso only.  Wash before return.',
      category: 'body armour',
      count: 20
    },
    {
      id: cuid(),
      name: 'Body armour - suit, light',
      description: 'Full suit of body armour, covers torse, thighs, arms and includes helmet.  Wash before return.',
      category: 'body armour',
      count: 20
    },
    {
      id: cuid(),
      name: 'Rations - standard, daily per person',
      description: 'One day of standard rations for one person.',
      category: 'rations',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Rations - formula++, daily per person',
      description: 'One day of high-activity rations for one person.',
      category: 'rations',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Survival rations - imperishable, weekly per squad',
      description: 'One week of highly imperishable food for 12 people.',
      category: 'rations',
      consumable: true
    },
    {
      id: cuid(),
      name: 'Communication kit - standard (base + 6 stations)',
      description: 'Standard communication kit with base and 6 receivers.',
      category: 'communications',
      count: 4
    },
    {
      id: cuid(),
      name: 'Communication kit - additional station',
      description: 'Additional station for standard communication kit (base supports up to 12 receivers).',
      category: 'communications',
      count: 20
    }
  ]

  console.log(JSON.stringify(data, null, 2));