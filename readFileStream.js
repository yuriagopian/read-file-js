  
  import { format } from 'date-fns';
  import * as readline from 'readline';
  
  // import {
  //   ParquetSchema,
  //   ParquetWriter,
  //   ParquetReader,
  //   ParquetData,
  //   ParquetTransformer,
  //   ParquetRecord,
  // } from 'parquets';
  
  import * as parquet from 'parquetjs-lite-dict';
  //      const readInterface = readline.createInterface(result, process.stdout);
   // const readFile = new Promise(function (resolve, reject) {
      //   readInterface.on('line', function (line) {
      //     line = line.replace(/'/g, '"');
      //     line = line.replace(/None/g, null);
      //     chunks.push(JSON.parse(line));
      //     currentChunkCount += 1;
      //     if (currentChunkCount == chunkOffSet) {
      //       processChunk(chunks);

      //       currentChunkCount = 0;
      //       chunks = [];
      //     }
      //   });

      //   readInterface.on('end', () => resolve(null));
      //   readInterface.on('error', (error) => reject(error));
      // });

      // await readFile;
      // result.on('data', function (chunk) {
      //   currentChunkCount += 1;
      //   if (currentChunkCount == chunkOffSet) {
      //     currentChunkCount = 0;
      //   }

      //   progress += chunk.length;
      //   chunks.push(chunk.toString());
      //   console.log('chunk', chunk.toString());
      //   console.log(`Progress: ${(progress / contentLength) * 100}%`);
      // });

        // const processChunk = this.processChunk.bind(this);

      // const liner = new lineByLine(result);
      // let line;

      // while ((line = liner.next())) {
      //   console.log(line);
      // }