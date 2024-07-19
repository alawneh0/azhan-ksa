
# azhan-ksa
**azhan-ksa** is a Node.js CLI tool and library to get prayer (Azhan) times for various cities in Saudi Arabia. It leverages the Aladhan API to provide accurate prayer times based on the selected city's coordinates.

## Features

- Get prayer times for major cities in Saudi Arabia.
- Easy-to-use command-line interface.

## Installation

### Global Installation

To install **azhan-ksa** globally, run:

```sh
npm install -g azhan-ksa
```

### Local Installation

To install **azhan-ksa** in your project, run:

```sh
npm install azhan-ksa
```

## Usage

### Command-Line Interface

#### Get Prayer Times

To get prayer times for a specific city, use:

```sh
azhan-ksa get-times <city>
```

For example, to get prayer times for Riyadh:

```sh
azhan-ksa get-times riyadh
```

#### List Available Cities

To list all available cities:

```sh
azhan-ksa list-cities
```

### Library

You can also use **azhan-ksa** as a library in your JavaScript project.

#### Get Prayer Times

Here's an example of how to get prayer times for a specific city:

```javascript
const { getAzhanTimes } = require('azhan-ksa');

(async () => {
  try {
    const times = await getAzhanTimes('Riyadh');
    console.log('Azhan times for Riyadh:');
    console.log(times);
  } catch (error) {
    console.error('Error fetching Azhan times:', error.message);
  }
})();
```

## Available Cities

- Riyadh
- Jeddah
- Mecca
- Medina
- Dammam
- Khobar
- Tabuk
- Buraydah
- Hail
- Najran
- Abha
- Khamis Mushait
- Jizan
- Yanbu
- Al Qatif
- Jubail
- Al Hasa
- Arar
- Sakakah
- Al Bahah
- Al Kharj
- Taif

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License. 

## Support

For support, please open an issue on the [GitHub repository](https://github.com/alawneh0/azhan-ksa).

---

Made with ❤️ by [Mohammad Alawneh](https://github.com/alawneh0)
