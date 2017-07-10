import { Types } from 'mongoose';

export default {
  model: 'Attraction',
  data: [
    {
      _id: Types.ObjectId('56aa0dc353c8040f4cc54637'),
      title: 'Königsplatz',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Königsplatz',
      duration: 30,
      category: 'Monuments',
      coordinates: {
        latitude: 48.1458473,
        longitude: 11.5651
      },
      rating: {
        quality: {
          rating: 4.7,
          amount: 3000
        },
        popularity: {
          rating: 4.3,
          amount: 3000
        }
      },
      filename: 'http://images.portal.muenchen.de/upload/media/000/000/218/684/resized/0750x0310/detail-staatliche-antikensammlungen.jpg'
    },
    {
      _id: Types.ObjectId('56ca0db353c8040f4cc54638'),
      title: 'Siegestor',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Leopoldstraße',
      duration: 20,
      category: 'Monuments',
      coordinates: {
        latitude: 48.1523619,
        longitude: 11.5822734
      },
      rating: {
        quality: {
          rating: 3.5,
          amount: 2000
        },
        popularity: {
          rating: 4.1,
          amount: 2000
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ODuf4URg1UixR7goPzVSNUWA583Zc_rAlYlTolqTe6DYs1GZ'
    },

    {
      _id: Types.ObjectId('56aa0db363c8140f4cc54639'),
      title: 'Feldherrenhalle',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Residenzstraße',
      duration: 30,
      category: 'Monuments',
      coordinates: {
        latitude: 48.1417443,
        longitude: 11.5773413
      },
      rating: {
        quality: {
          rating: 4.5,
          amount: 4500
        },
        popularity: {
          rating: 4.4,
          amount: 4500
        }
      },
      filename: 'http://images.portal.muenchen.de/upload/media/000/000/218/396/resized/0640x0264/feldherrnhalle-detail.jpg'
    },
    {
      _id: Types.ObjectId('56aa0db353c8041f4cc54640'),
      title: 'Mariensäule',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Marienplatz',
      duration: 30,
      category: 'Monuments',
      coordinates: {
        latitude: 48.13723,
        longitude: 11.575513
      },
      rating: {
        quality: {
          rating: 4.2,
          amount: 6000
        },
        popularity: {
          rating: 4.8,
          amount: 6000
        }
      },
      filename: 'http://www.br.de/radio/bayern2/bayern/zeit-fuer-bayern/mariensaeule-patrona-bavariae-100~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg?version=111cf'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54641'),
      title: 'Obelisk',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Karolinenplatz',
      duration: 20,
      category: 'Monuments',
      coordinates: {
        latitude: 48.1446611,
        longitude: 11.5692434
      },
      rating: {
        quality: {
          rating: 3.4,
          amount: 600
        },
        popularity: {
          rating: 3.1,
          amount: 600
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhmxzFTDYnFnrjNIEGlJ9vdAGL6kzGiuV-FdH0rzUMvz1u3F26w'
    },

    {
      _id: Types.ObjectId('56aa1db353c8040f4cc54642'),
      title: 'Alte Pinakothek',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Barer Straße',
      duration: 180,
      category: 'Museums',
      coordinates: {
        latitude: 48.1482913,
        longitude: 11.5699847
      },
      rating: {
        quality: {
          rating: 3.9,
          amount: 1000
        },
        popularity: {
          rating: 3.1,
          amount: 1000
        }
      },
      filename: 'https://www.codart.nl/wp-content/uploads/2016/11/148046346895151361.jpg'
    },
    {
      _id: Types.ObjectId('56aa0db353d8040f4cc54643'),
      title: 'Neue Pinakothek',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Barer Straße',
      category: 'Museums',
      duration: 120,
      coordinates: {
        latitude: 48.1498869,
        longitude: 11.5711139
      },
      rating: {
        quality: {
          rating: 3.7,
          amount: 1000
        },
        popularity: {
          rating: 3.6,
          amount: 1000
        }
      },
      filename: 'http://museen-in-muenchen.de/fileadmin/user_upload/museumscontent/neue-pinakothek/bildergalerie/neue_pinakothek_01.jpg'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040e4cc54644'),
      title: 'Pinakothek der Moderne',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Barer Straße',
      category: 'Museums',
      duration: 120,
      coordinates: {
        latitude: 48.1471559,
        longitude: 11.5723021
      },
      rating: {
        quality: {
          rating: 3.5,
          amount: 1500
        },
        popularity: {
          rating: 3.1,
          amount: 1500
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNc5XW0zfvySdkyz-N4JMoqYo_Pl9vEDfosf7uOGgG6mj6AKzGCg'
    },
    {
      _id: Types.ObjectId('56aa0db354c8040f4cc54645'),
      title: 'Sammlung Brandhorst',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Theresienstraße',
      category: 'Museums',
      duration: 100,
      coordinates: {
        latitude: 48.1481359,
        longitude: 11.5742667
      },
      rating: {
        quality: {
          rating: 4.2,
          amount: 700
        },
        popularity: {
          rating: 2.3,
          amount: 700
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsl-keFVoaqi5h7DOoIUbul8afkWTbh0tSBVH3sSc0lYeUkF_'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54646'),
      title: 'Lenbachhaus',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Luisenstraße',
      category: 'Museums',
      duration: 120,
      coordinates: {
        latitude: 48.1467073,
        longitude: 11.5640009
      },
      rating: {
        quality: {
          rating: 4.1,
          amount: 900
        },
        popularity: {
          rating: 3.7,
          amount: 900
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPOdHq_vhyeau3KUivRc4XDWQEyITdFdDAaZtHvc59nLQkjo7'
    },

    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54647'),
      title: 'Old botanic Garden',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Sophienstraße',
      category: 'Parks',
      duration: 30,
      coordinates: {
        latitude: 48.1419801,
        longitude: 11.564044
      },
      rating: {
        quality: {
          rating: 3.3,
          amount: 1000
        },
        popularity: {
          rating: 1.9,
          amount: 1000
        }
      }
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54648'),
      title: 'Botanic Garden',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Menzinger Straße 65',
      category: 'Parks',
      duration: 180,
      coordinates: {
        latitude: 48.1644668,
        longitude: 11.5029272
      },
      rating: {
        quality: {
          rating: 4.3,
          amount: 1000
        },
        popularity: {
          rating: 1.8,
          amount: 1000
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0T8Meu17GVJvCs3kVArtYELSamKL5-X4knfVniX3bRFTfrx5a1w'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54649'),
      title: 'English Garden',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: '',
      duration: 120,
      category: 'Parks',
      coordinates: {
        latitude: 48.1642323,
        longitude: 11.6055522
      },
      rating: {
        quality: {
          rating: 4.6,
          amount: 5000
        },
        popularity: {
          rating: 4.7,
          amount: 5000
        }
      },
      filename: 'http://res.muenchen-p.de/.imaging/stk/responsive/image300/dms/aktuell-2016/mde/monopteros/monopteros-2/document/monopteros-2.jpg'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54650'),
      title: 'Olympiapark',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Spiridon-Louis-Ring',
      duration: 120,
      category: 'Parks',
      coordinates: {
        latitude: 48.1754646,
        longitude: 11.551797
      },
      rating: {
        quality: {
          rating: 4.1,
          amount: 6000
        },
        popularity: {
          rating: 4.7,
          amount: 6000
        }
      },
      filename: 'https://www.goeuro.de/blog/wp-content/uploads/2014/05/Freiluftkino-in-München-Kino-am-Olympiasee.jpg'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54651'),
      title: 'Hofgarten',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Hofgartenstraße',
      duration: 30,
      category: 'Parks',
      coordinates: {
        latitude: 48.1427778,
        longitude: 11.58
      },
      rating: {
        quality: {
          rating: 4.0,
          amount: 2000
        },
        popularity: {
          rating: 2.1,
          amount: 2000
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAKBGkHgrMeP9w9vWWpAtqlxuLx9EnhouIYtx3qa4L5zHekB5Ag'
    },

    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54652'),
      title: 'Theatinerkirche',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Salvatorplatz',
      duration: 30,
      category: 'Churches',
      coordinates: {
        latitude: 48.1420413,
        longitude: 11.5766345
      },
      rating: {
        quality: {
          rating: 3.6,
          amount: 1000
        },
        popularity: {
          rating: 2.4,
          amount: 1000
        }
      }
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54653'),
      title: 'Saint Peters Church',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Rindermarkt',
      duration: 60,
      category: 'Churches',
      coordinates: {
        latitude: 48.136491,
        longitude: 11.5760468
      },
      rating: {
        quality: {
          rating: 3.8,
          amount: 1000
        },
        popularity: {
          rating: 1.8,
          amount: 1000
        }
      },
      filename: 'http://res.muenchen-p.de/fl_progressive,q_65/.imaging/stk/responsive/galleryPreview600/dms/sw/c/shutterstock/alter-peter-panorama/document/alter-peter-panorama.jpg'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54654'),
      title: 'Saint Michaels Church',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Neuhauser Straße',
      duration: 30,
      category: 'Churches',
      coordinates: {
        latitude: 48.1388989,
        longitude: 11.5704987
      },
      rating: {
        quality: {
          rating: 3.6,
          amount: 1000
        },
        popularity: {
          rating: 1.9,
          amount: 1000
        }
      }
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54655'),
      title: 'Frauenkirche',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Frauenplatz',
      duration: 30,
      category: 'Churches',
      coordinates: {
        latitude: 48.138631,
        longitude: 11.5736254
      },
      rating: {
        quality: {
          rating: 4.2,
          amount: 2000
        },
        popularity: {
          rating: 4.3,
          amount: 2000
        }
      },
      filename: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kdHzlGrXplRPLyVCKzdyBn590uGl12jY1QYrW-lWtNebg9dU'
    },
    {
      _id: Types.ObjectId('56aa0db353c8040f4cc54656'),
      title: 'Saint Ludwigs Church',
      city: Types.ObjectId('56aa0db353c8040f4cc54647'),
      address: 'Ludwigstraße',
      duration: 30,
      category: 'Churches',
      coordinates: {
        latitude: 48.148872,
        longitude: 11.5812088
      },
      rating: {
        quality: {
          rating: 3.4,
          amount: 1000
        },
        popularity: {
          rating: 2.7,
          amount: 1000
        }
      }
    }
  ]
};
